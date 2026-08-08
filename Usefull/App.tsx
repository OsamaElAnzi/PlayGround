/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={{ backgroundColor: isDarkMode ? '#226666' : '#93D1D1', flex: 1 }}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //Botton 1 on row 1
        <TouchableOpacity
          onPress={() => console.log('TouchableOpacity pressed')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="calculator" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 2 on row 1
        <TouchableOpacity
          onPress={() => console.log('TouchableOpacity pressed')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="calendar" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 3 on row 1
        <TouchableOpacity
          onPress={() => console.log('TouchableOpacity pressed')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="check" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 4 on row 1
        <TouchableOpacity
          onPress={() => console.log('TouchableOpacity pressed')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="clock" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        </View>
        //Welcome text
        <Text style={styles.sectionTitle}>WELCOME TO USEFULL APP!</Text>
        //row 2 SECTION NOTES
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={styles.SectionContainer}
          onPress={() => console.log('TouchableOpacity pressed')}
        >
          <View>
            <MaterialIcons name="notes" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        </View>
        //row 3 SECTION MAPS
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
          <TouchableOpacity
            style={styles.SectionContainer}
            onPress={() => console.log('TouchableOpacity pressed')}
          >
            <View>
              <MaterialIcons name="map" size={48} color="#226666" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  CategoryContainer: {
    backgroundColor: '#ECFAFA',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  SectionContainer: {
    backgroundColor: '#ECFAFA',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    width: '95%',
    height: 100,
  }
});

