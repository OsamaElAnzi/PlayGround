import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from "react-native-calendar-ui";

export default function AgendaView() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? '#000000' : '#ffffff', padding: 20}}>
            <Calendar
                onDateSelect={(date) => console.log("Selected:", date)}
                style={{
                    
                }}
                colors={{
                    primary: "#0000000",
                    selectedText: "#FFFFFF",
                }}
                />
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