import { View, Text, StyleSheet } from 'react-native'
import { MAX_VALUE } from '../config/game'

interface TamagotchiTextProps{
    label: string
    value: number
}

export default function TamagotchiText({label, value}: TamagotchiTextProps) {
  return (
      <Text style={styles.info}>{label} {value} / {MAX_VALUE}</Text>
  )
}

const styles = StyleSheet.create({
 
  info: {
    fontSize: 20,
    marginVertical: 8,
  },
})  