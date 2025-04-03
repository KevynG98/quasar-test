import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Banner from '../components/Banner';
import Section from '../components/Section';
import MovieMetadata from '../components/MovieMetadata';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🔍 Buscar</Text>
        </TouchableOpacity>
      </View>

      <Banner />
      <MovieMetadata section="trending" />
      <Section id="you-might-like" />
      <Section id="my-list" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 16,
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
