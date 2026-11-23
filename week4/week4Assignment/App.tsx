import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList, Button, Alert } from "react-native";
import styles from "./CSS/styles";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "./types/Task";
import Row from "./components/Row";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadTasks = async () => {
    try {
      const saved = await AsyncStorage.getItem("tasks")

      if (saved) {
        setTasks(JSON.parse(saved) as Task[])
      }
      } catch (error) {
      console.error("Error loading tasks:", error)
      } finally {
        setLoading(false)
      }
    }
    console.log("loading tasks")
    loadTasks()
  }, [])

  const saveTodos = async (todos: Task[]) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(todos))
    setTasks( todos )
  }

  const addTask = async () => {
    if (!input.trim() || loading) return;
    
    const newTask: Task = {
      id: Date.now(),
      text: input.trim(),
      completed: 0
    }
    
    const updatedTasks = [...tasks, newTask]
    
    await saveTodos(updatedTasks)
    setInput("")

    console.log("Adding new item")
  }


  const deleteTodo = async (id: number) => {
    try {
      const updatedTasks = tasks.filter((item) => item.id !== id)

      await saveTodos(updatedTasks)

      } catch (error) {
      console.error("Error loading tasks:", error)
      }
    console.log("task deleted")
  };

  const toggleTodo = async (id: number) => {
    try{
      const toggleTask = tasks.map(item => 
        item.id === id 
        ? {...item, completed: item.completed === 0 ? 1 : 0} 
        : item
      )
      await saveTodos(toggleTask)

      console.log("toggling task")
    } catch(error){
      console.log(error)
    }
  };

  const clearTodos = async () => {
    await saveTodos([])
  }

  const confirmClear = () => {
    Alert.alert(
      "Clear all tasks?",
      "This permanently deletes all saved tasks.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: () => {
            void clearTodos().catch(console.error);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Add new task..."
          onSubmitEditing={addTask}
        />
      </View>
      <FlatList<Task>
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: {item: Task}) => (
          <Row item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        )}
        ListFooterComponent={
          <Button 
            title="Clear all tasks"
            onPress={confirmClear}
            />
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
