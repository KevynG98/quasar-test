import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Banner() {
  return (
    <ImageBackground
      // Primero usamos una imagen externa para verificar
      source={require('../assets/images/serie.png')}
      style={styles.banner}
      imageStyle={{ borderRadius: 10 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Generic Movie Title</Text>

        <View style={styles.meta}>
          <Text style={styles.metaText}>2025</Text>
          <Text style={styles.metaText}>·</Text>
          <Text style={styles.metaText}>1h 52min</Text>
          <Text style={styles.rating}>PG-13</Text>
        </View>

        <View style={styles.trending}>
          <Text style={styles.trendingText}>#1 in Movies Today</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-end',
    backgroundColor: '#222', // fondo en caso de que la imagen no cargue
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    flexWrap: 'wrap',
  },
  metaText: {
    color: '#ccc',
    fontSize: 12,
    marginRight: 6,
  },
  rating: {
    color: 'white',
    backgroundColor: '#444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
  },
  trending: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  trendingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
});
