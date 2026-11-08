import { View, Text, StyleSheet, Button } from 'react-native'
import { MAX_VALUE } from '../config/game'
import { Dispatch, SetStateAction } from 'react'

type TamagotchiButtonProps = {
title: string
setState: Dispatch<SetStateAction<number>>
}

export default function TamagotchiButton({title, setState}: TamagotchiButtonProps) {
  return (
    <Button title={title} onPress={() => setState(current => (current < MAX_VALUE ? current +1 : current))} />
  )
}
