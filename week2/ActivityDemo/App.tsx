import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextActivityIndicator, {ActivityIndicatorSize} from './components/TextActivityIndicator';
import React from 'react';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    },3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  

  return (
    <View style={styles.container}>
      {loading ? ( 
      <TextActivityIndicator 
      message="Loading..."
      size={ActivityIndicatorSize.Small}
      color='#0000ff'
      />
      ) : (
        <Text>Welcome to the page</Text>
      )}
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
