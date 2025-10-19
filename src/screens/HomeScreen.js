import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Welcome to CampusPlug 🎓</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  text: {
    padding: 20,
    fontSize: 18,
  },
});
