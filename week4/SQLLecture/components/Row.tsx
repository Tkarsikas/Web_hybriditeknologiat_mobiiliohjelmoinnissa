import { View, Text, StyleSheet } from 'react-native'
import { Task } from '../types/Task';
import styles from '../CSS/styles';

interface TodoRowProps {
    item: Task
}

export default function Row({item}: TodoRowProps) {
  return (
    <View style={styles.todoRow}>
      <Text style={styles.todoText}>{item.text}</Text>
    </View>
  )
}
