import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme, TextInput, Alert} from 'react-native';
import { rows, operators, specialButtonsOthers, calculate } from '../components/CalculatorLogic/calculateLogic';

export default function CalculatorView() {
    const [value, setValue] = useState<number>(0);
    const [operator, setOperator] = useState<string | null>(null);
    const [currentInput, setCurrentInput] = useState<Array<string>>([]);
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const isDarkMode = useColorScheme() === 'dark';


    const handleButtonPress = (button: string | number) => {
        let newInput = [...currentInput];
        if (button === 'AC') {
            setValue(0);
            setOperator(null);
            setCurrentInput([]);
            setPreviousValue(null);
        } else if (button === '<') {
            newInput.pop();
            setCurrentInput(newInput);
            setValue(parseFloat(newInput.join('')) || 0);
        } else if (operators.includes(button as string)) {
            if (previousValue !== null && operator !== null) {
                const result = calculate(previousValue, value, operator);
                setValue(result);
                setPreviousValue(result);
            } else {
                setPreviousValue(value);
            }
            setOperator(button as string);
            setCurrentInput([]);
        } else if (button === '=') {
            if (previousValue !== null && operator !== null) {
                const result = calculate(previousValue, value, operator);
                setValue(result);
                setPreviousValue(null);
                setOperator(null);
                setCurrentInput([]);
            }
        } else if (button === ',') {
            if (!newInput.includes(',')) {
                newInput.push(',');
                setCurrentInput(newInput);
            }
        } else {
            newInput.push(button.toString());
            setCurrentInput(newInput);
            setValue(parseFloat(newInput.join('')) || 0);
        }

    };
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#000000' : '#ffffff', padding: 20}}>
            <Text style={styles.sectionTitle}>Calculator View</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.CalculatorInput} >{value}</Text>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            {row.map((button, buttonIndex) => (
                                <TouchableOpacity
                                    key={buttonIndex}
                                    onPress={() => handleButtonPress(button)}
                                >
                                    {button === '<' ? (
                                        <Text style={operators.includes(button) ? styles.SpecialButtonRight : specialButtonsOthers.includes(button as string) ? styles.SpecialButtonOthers : styles.Button}><Feather name="delete" size={34} color="#ffffff" /></Text>
                                    ) : button === '/' ? (
                                        <Text style={operators.includes(button) ? styles.SpecialButtonRight : specialButtonsOthers.includes(button as string) ? styles.SpecialButtonOthers : styles.Button}><FontAwesome6 name="divide" size={34} color="#ffffff" /></Text>
                                    ) : (
                                        <Text style={operators.includes(button) ? styles.SpecialButtonRight : specialButtonsOthers.includes(button as string) ? styles.SpecialButtonOthers : styles.Button}>{button}</Text>
                                    )}
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
        color: '#0000000',
        paddingBottom: 20,
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
        paddingBottom: 150
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