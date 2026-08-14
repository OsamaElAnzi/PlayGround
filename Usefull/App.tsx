/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useColorScheme, StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import React from 'react';
import { Navigation } from './Navigation';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={{ backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1 }}>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
      
    </SafeAreaProvider>
  );
}


