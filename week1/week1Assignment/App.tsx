import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setage] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerLimit = (220 - ageAsNumber) * 0.65
  const upperLimit = (220 - ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.basic}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder='age'
        keyboardType='number-pad'
        value={age}
        onChangeText={setage}
      />
      {age.trim() !== '' && (
        <>
          <Text style={styles.basicText}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
          <Text style={styles.basicText}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  heading: {
    maxWidth: '100%',
    color: '#222',
    fontSize: 28,
    fontWeight: '700',
  },
  basic: {
    paddingTop: 15,
    fontSize: 18,
    paddingBottom: 5
  },
  basicText: {
    fontSize: 15,
    paddingTop: 5
  },
  input: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
  }
});
