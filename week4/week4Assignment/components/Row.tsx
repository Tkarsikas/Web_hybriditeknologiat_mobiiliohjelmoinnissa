import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Task } from '../types/Task';
import styles from '../CSS/styles';

interface TodoRowProps {
    item: Task
    deleteTodo: (id: number) => Promise<void>
    toggleTodo: (id: number, completed: number) => Promise<void>
}

export default function Row({item, deleteTodo, toggleTodo}: TodoRowProps) {
  return (
    <View style={styles.todoRow}>
      <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => toggleTodo(item.id, item.completed)}
      accessibilityRole="button"
      accessibilityLabel={item.completed 
      ? `Mark ${item.text} as incomplete` : `Mark ${item.text} as completed`}>
      <Text style={[styles.todoText, 
        item.completed === 1 ? styles.completedText : null]}>
          {item.text}
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => deleteTodo(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>  
      </TouchableOpacity>
    </View>
  )
}
