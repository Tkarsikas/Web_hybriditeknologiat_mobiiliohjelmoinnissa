import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { INITIAL_VALUE, INTERVAL_IN_MILLIS, MAX_VALUE } from './config/game';
import checkStatus from './utils/status';
import TamagotchiButton from './components/TamagotchiButton';
import TamagotchiText from './components/TamagotchiText';

export default function App() {
  const [hunger, setHunger] = useState<number>(INITIAL_VALUE)
  const [energy, setEnergy] = useState<number>(INITIAL_VALUE)
  const [mood, setMood] = useState<number>(INITIAL_VALUE)

  const isDead: boolean = hunger === 0 || energy === 0 || mood === 0
  const status: string = checkStatus(hunger, energy, mood)

  console.log("DEAD IS " + isDead)

  useEffect(() => {
    if(isDead) return

    const timer: number = setInterval(() => {
      setHunger(current => Math.max(current-1,0))
      setMood(current => Math.max(current-1,0))
      setEnergy(current => (current > 0 ? current -1 : current))
      console.log("timer is running...")
    }, INTERVAL_IN_MILLIS)
  
    return () => {
      console.log("clear interval")
      clearInterval(timer)
    }
  }, [isDead])
  

  const restart = () => {
    setHunger(INITIAL_VALUE)
    setEnergy(INITIAL_VALUE)
    setMood(INITIAL_VALUE)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamagotchi</Text>
      <TamagotchiText label="🍔Hunger" value={hunger}/>
      <TamagotchiText label="🥱Energy" value={energy}/>
      <TamagotchiText label="😁Mood" value={mood}/>
      <Text style={styles.status}>{status}</Text>
      {isDead ? (
        <Button title="Restart" onPress={() => restart()}/>

        ) : (
      <View style={styles.buttons}>
        <TamagotchiButton title="Feed" setState={setHunger}/>
        <TamagotchiButton title="Sleep" setState={setEnergy}/>
        <TamagotchiButton title="Play" setState={setMood}/>
      </View>
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
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#3c00ff'
  },
  info: {
    fontSize: 20,
    marginVertical: 8,
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8
  },
  buttons: {
    flexDirection: 'row',
    gap: 8
  }
});
