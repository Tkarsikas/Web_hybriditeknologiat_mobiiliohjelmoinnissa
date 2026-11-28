import { StatusBar } from 'expo-status-bar';
import { useEffect, useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useClock } from './hooks/useClock';
import FormattedTime from './components/FormattedTime';

export default function App() {
  const {time, isRunning, start, stop, reset} = useClock()

  return (
    <View style={styles.container}>
      <FormattedTime time={time} />
      <View style={styles.button}>
        <Button title="Start" onPress={ start } disabled={isRunning}/>
        <Button title="Stop" onPress={ stop } disabled={!isRunning}/>
        <Button title="Reset" onPress={ reset } disabled={time=== 0 && !isRunning}/>
      </View>
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
  button: {
    flexDirection: 'column',
    gap: 8
  }
});
