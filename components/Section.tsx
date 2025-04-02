import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../moviesJson.json';
import Card from './Card';

type SectionProps = {
  id: string; // el id de la sección que querés mostrar
};

export default function Section({ id }: SectionProps) {
  const section = data.containers.find(c => c.id === id);

  if (!section) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Section "{id}" not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{section.title}</Text>

      <FlatList
        data={section.items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  errorContainer: {
    padding: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});