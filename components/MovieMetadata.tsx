import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';

import data from '../moviesJson.json';

const screenWidth = Dimensions.get('window').width;

export default function FeatureCard({ section }: { section: string }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const container = data.containers.find(c => c.id === section);
  const movie = container?.items[0];

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
          <Text style={styles.meta}>
            {movie.year} · {movie.duration} · {movie.rating}
          </Text>
          <Text style={styles.detail}>Calidad: {movie.quality}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {movie.description}
          </Text>
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
    marginTop: 16,
    marginBottom: 12,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  meta: {
    color: '#ccc',
    fontSize: 13,
    marginVertical: 4,
  },
  detail: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  description: {
    color: '#bbb',
    fontSize: 13,
    lineHeight: 18,
  },
});
