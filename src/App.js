import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
      <HomeScreen />
    </SafeAreaView>
  );
}
