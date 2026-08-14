import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ClockView() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#000000' : '#ffffff', padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#ffffff',
        flex: 1
    },
    CategoryContainer: {
        backgroundColor: '#000000',
        borderRadius: 10,
    },
});