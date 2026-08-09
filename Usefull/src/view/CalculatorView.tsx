import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CalculatorView() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#226666' : '#93D1D1', padding: 20}}>
            <Text style={styles.sectionTitle}>Calculator View</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={() => console.log('TouchableOpacity pressed')}
                >
                    <View style={styles.CategoryContainer}>
                        <Icon name="calculator" size={48} color="#226666"/>
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
        color: '#226666',
        paddingTop: 20,
    },
    CategoryContainer: {
        backgroundColor: '#93D1D1',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
}); 