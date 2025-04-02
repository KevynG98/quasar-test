import React from 'react';
import { ScrollView } from 'react-native';
import Banner from '../components/Banner';
import Section from '../components/Section';

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <Banner />
      <Section id="trending" />
      <Section id="you-might-like" />
      <Section id="my-list" />
    </ScrollView>
  );
}
