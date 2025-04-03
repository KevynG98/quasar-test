// src/components/SearchResultItem.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';
import data from '../moviesJson.json';

const screenWidth = Dimensions.get('window').width;

export default function SearchResultItem({ movieId }: { movieId: string }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const allMovies = data.containers.flatMap(c => c.items);
  const movie = allMovies.find(m => m.id === movieId);

  if (!movie) return null;

  const handlePress = () => {
    navigation.navigate('Detail', { movieId: movie.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <ImageBackground
        source={{ uri: movie.posters.landscape.url }}
        style={styles.card}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth - 32,
    height: (screenWidth - 32) * 9 / 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});