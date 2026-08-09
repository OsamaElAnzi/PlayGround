/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useColorScheme, StatusBar} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import React from 'react';
import { Navigation } from './Navigation';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={{ backgroundColor: isDarkMode ? '#226666' : '#93D1D1', flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
      
    </SafeAreaProvider>
  );
}


