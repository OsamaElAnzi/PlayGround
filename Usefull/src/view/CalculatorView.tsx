import { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CalculatorView() {
    const [value, setValue] = useState<number>(0);
    const isDarkMode = useColorScheme() === 'dark';

    const rows = [
        ['<', 'AC', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '+'],
        ['+/-', '0', ',', '='],
    ];
    const specialButtonsRight = ['/', 'x', '+', '='];
    const specialButtonsOthers = ['<', 'AC', '%'];

    const handleButtonPress = (button: string) => {
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#226666' : '#93D1D1', padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.CalculatorInput} >{value.toString().split('').reverse().join('')}</Text>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            {row.map((button, buttonIndex) => (
                                <TouchableOpacity
                                    key={buttonIndex}
                                    onPress={() => console.log(`Button ${button} pressed`)}
                                >
                                    <Text style={specialButtonsRight.includes(button) ? styles.SpecialButtonRight : specialButtonsOthers.includes(button) ? styles.SpecialButtonOthers : styles.Button}>{button}</Text>
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
        paddingBottom: 150,
        top: 140,
        left: 250,
    },
    Button: {
        borderRadius: 50,
        fontSize: 34,
        backgroundColor: '#9cacac',
        margin: 5,
        color: '#ffffff',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 13,
    },
    SpecialButtonRight: {
        borderRadius: 50,
        fontSize: 34,
        backgroundColor: '#ff9900',
        margin: 5,
        color: '#ffffff',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 13,
    },
    SpecialButtonOthers: {
        borderRadius: 50,
        fontSize: 34,
        backgroundColor: '#6f7373',
        margin: 5,
        color: '#ffffff',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 13,
    }
}); 