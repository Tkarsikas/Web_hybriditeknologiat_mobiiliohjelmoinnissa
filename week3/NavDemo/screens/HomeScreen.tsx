import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button, NativeAppEventEmitter } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({navigation}:props){
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: 'red' },
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
                <Ionicons 
                name='arrow-forward'
                size={24}
                color='#fff'
                style={{ marginRight: 0, padding: 0}}
                onPress={() => navigation.navigate('SecondScreen', {message: 'test'})}
                />
            ),
        })
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Home Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});