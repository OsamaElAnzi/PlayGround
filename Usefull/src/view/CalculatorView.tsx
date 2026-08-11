import { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CalculatorView() {
    const [value, setValue] = useState<number>(0);
    const isDarkMode = useColorScheme() === 'dark';

    const rows = [
        ['del', 'C', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', 'x'],
        ['x', '0', ',', '='],
    ];
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#226666' : '#93D1D1', padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.CalculatorInput} >{value}</Text>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            {row.map((button, buttonIndex) => (
                                <TouchableOpacity
                                    key={buttonIndex}
                                    onPress={() => console.log(`Button ${button} pressed`)}
                                >
                                    <Text style={styles.Button}>{button}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#226666',
        paddingTop: 20,
    },
    CategoryContainer: {
        backgroundColor: '#000000',
        borderRadius: 30 ,
        padding: 20,
        marginBottom: 20,
        width: 350,
        height: 650,
    },
    CalculatorInput: {
        borderRadius: 8,
        padding: 10,
        fontSize: 54,
        color: '#ffffff',
    },
    Button: {
        padding: 10,
        fontSize: 54,
        color: '#ffffff',
        top: 80,
    },
}); 