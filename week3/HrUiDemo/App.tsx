import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import { useFonts } from "expo-font";
import { useState } from 'react';
import calculateHr from './utils/calculateHr';


export default function App() {
  const [age, setAge] = useState<string>("")

  const hr = calculateHr(age) as {lower: number, upper: number}


  const [fontsLoaded] = useFonts({
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf')
  })

  if(!fontsLoaded){
    return <Text>Loading fonts...</Text>
  }


  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Heart rate limits</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder='Enter age'
        keyboardType='numeric'
        />
        <Text style={styles.output}> lower: {hr.lower.toFixed(0)} - upper: {hr.upper.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
