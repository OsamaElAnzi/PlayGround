import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState, useEffect } from 'react';

export default function ClockView() {
    const isDarkMode = useColorScheme() === 'dark';
        
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <View style={{flex: 1,backgroundColor: isDarkMode ? '#000000' : '#ffffff'}}>
            <Text style={isDarkMode ? styles.sectionTitleDark :styles.sectionTitle}>{time.toLocaleTimeString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        top: 320,
        right: 150,
        fontSize: 170,
        fontWeight: '400',
        color: '#00000',
        transform: [{rotate: '90deg'}],
        width: 730
    },
    sectionTitleDark: {
        top: 320,
        right: 155,
        fontSize: 170,
        fontWeight: '400',
        color: '#ffffff',
        transform: [{rotate: '90deg'}],
        width: 730
    }
});