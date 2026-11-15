import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>

export default function SecondScreen ({navigation, route}: Props){
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: 'red'},
            headerTintColor: '#fff',
        })
    },[navigation])

    useEffect(() => {
      const onBackPress = () => {
        console.log("On back press")
        return false
      }
      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () => {
        subscription.remove()
      }
    }, [])
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Second Screen!</Text>
            <Text style={styles.text}>{route.params.message}</Text>
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
