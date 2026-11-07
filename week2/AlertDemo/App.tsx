import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)


  const showAlert = (): void => {
    Alert.alert('Alert', 'Are you sure?',
      [
        {
          text: 'Candel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            void enableSwitchAfterDelay()
          }
        },
      ],
      { cancelable: true}
    )
  }
  
  const enableSwitchAfterDelay = async (): Promise<void> => {
    setLoading(true)
    setSuccess(false)

    await new Promise<void>(resolve => {
      setTimeout(resolve, 3000)
    })

    setIsEnabled(previousState => !previousState)
    setLoading(false)
    setSuccess(true)
  }
  

  return (
    <View style={styles.container}>
      <Button title="Change switch position" onPress={showAlert} />
      <Switch 
        value={isEnabled}
      />
      {loading ? (
        <ActivityIndicator size={'large'}/>
      ) : success ? <Text>successfull</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
