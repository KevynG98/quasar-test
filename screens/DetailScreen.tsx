import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/MainStack';
import data from '../moviesJson.json';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation();
  const { movieId } = route.params;

  const movie =
    data.containers
      .flatMap(container => container.items)
      .find(item => item.id === movieId);

  if (!movie) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'white' }}>Película no encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: movie.posters.portrait.url }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>
          {movie.year} · {movie.duration} · {movie.rating}
        </Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  backButton: {
    padding: 12,
    backgroundColor: '#111',
  },
  backText: {
    color: '#00bcd4',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 500,
  },
  content: {
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  meta: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 12,
  },
  description: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
  centered: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
