import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';


export default function HomeView() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#226666' : '#93D1D1', padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        //Botton 1 on row 1
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculator')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="calculator" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 2 on row 1
        <TouchableOpacity
          onPress={() => navigation.navigate('Agenda')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="calendar" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 3 on row 1
        <TouchableOpacity
          onPress={() => navigation.navigate('Tasks')}
        >
          <View style={styles.CategoryContainer}>
            <Icon name="tasks" size={48} color="#226666" />
          </View>
        </TouchableOpacity>
        //Botton 4 on row 1
        <TouchableOpacity
          onPress={() => navigation.navigate('Clock')}
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
          onPress={() => navigation.navigate('Notes')}
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
            onPress={() => navigation.navigate('GPS')}
          >
            <View>
              <MaterialIcons name="map" size={48} color="#226666" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 13,
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
