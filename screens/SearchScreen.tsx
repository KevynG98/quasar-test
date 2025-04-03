import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import data from '../moviesJson.json';
import SearchResultItem from '../components/SearchResultItem';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    setQuery(text);

    if (text.trim() === '') {
      setResults([]);
      return;
    }

    const allMovies = data.containers.flatMap(c => c.items);
    const matches = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(text.toLowerCase()),
    );
    setResults(matches.map(m => m.id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Buscar película..."
        placeholderTextColor="#666"
        style={styles.input}
        value={query}
        onChangeText={text => handleSearch(text)}
      />

      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={id => id}
          renderItem={({item}) => <SearchResultItem movieId={item} />}
        />
      ) : query !== '' ? (
        <Text style={styles.notFound}>No se encontró ninguna película.</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 16,
  },
  input: {
    backgroundColor: '#1c1c1c',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  notFound: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    padding: 12,
    backgroundColor: '#111',
  },
  backText: {
    color: '#00bcd4',
    fontSize: 16,
  },
});
