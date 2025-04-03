import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';

type PosterType = 'portrait' | 'landscape' | 'thumbnail';

type Movie = {
  id: string;
  title: string;
  year: number;
  duration: string;
  rating: string;
  posters: {
    portrait: { url: string };
    landscape: { url: string };
    thumbnail: { url: string };
  };
};

type Props = {
  movie: Movie;
  posterType?: PosterType;
};

export default function Card({ movie, posterType = 'portrait' }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const imageUrl = movie.posters[posterType]?.url || movie.posters.portrait.url;

  const handlePress = () => {
    navigation.navigate('Detail', { movieId: movie.id });
  };

  const getImageHeight = (type: PosterType) => {
    switch (type) {
      case 'landscape':
        return 90;
      case 'thumbnail':
        return 160;
      case 'portrait':
      default:
        return 190;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, { height: getImageHeight(posterType) }]}
      />
      <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
      <Text style={styles.meta}>
        {movie.year} · {movie.duration}
      </Text>
      <Text style={styles.rating}>{movie.rating}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginRight: 10,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#222',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 14,
  },
  meta: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2,
  },
  rating: {
    color: '#999',
    fontSize: 11,
    marginTop: 2,
  },
});
