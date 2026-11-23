import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList, Button, Alert } from "react-native";
import styles from "./CSS/styles";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "./types/Task";
import Row from "./components/Row";
import * as SQLite from "expo-sqlite";

export default function App() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const initDb = async () => {
      const database = await SQLite.openDatabaseAsync("tasks.db");
      setDb(database);
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS todos 
        (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        completed INTEGER DEFAULT 0
        )
        `);
      loadTodos(database);
    };
    initDb();
    console.log("Database created");
  }, []);

  const loadTodos = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getAllAsync<Task>(
      "SELECT * FROM todos ORDER BY id DESC",
    );
    setTasks(result);
    console.log("loading tasks")
  };

  const addTask = async () => {
    if (!input.trim() || !db) return;

    await db.runAsync("INSERT INTO todos (text) VALUES (?)", input);

    // const id = tasks.length + 1
    // const task: Task = { id, text: input, completed: 0}
    // setTasks([...tasks, task])

    setInput("");
    loadTodos(db);
    console.log("Adding new item");
  };

  const deleteTodo = async (id: number) => {
    if (!db) return;
    await db.runAsync("DELETE FROM todos WHERE id = ?", id);
    loadTodos(db);
    console.log("task deleted")
  };

  const toggleTodo = async (id: number, completed: number) => {
    if (!db) return;
    await db.runAsync(
      "UPDATE todos SET completed = ? WHERE id = ?",
      completed ? 0 : 1,
      id,
    );
    loadTodos(db);
    console.log("toggling task")
  };

  const clearTodos = async () => {
    if(!db) return
    await db.runAsync("DELETE FROM todos")
    loadTodos(db)
    console.log("deleting all tasks")
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
