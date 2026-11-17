import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
  id: string,
  name: string
}

const STORAGE_KEY = 'SHOPPING_LIST_ITEMS'

export default function App() {
  const [items, setItems] = useState<Item[]>([])
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if(json) setItems(JSON.parse(json))
      }catch(e) {
        return
      }
    })()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  })

  const addItem = () => {
    if (input.trim()) {
      setItems(prev => [
        ...prev,
        { id: Date.now().toString(), name: input.trim() },
      ])
      setInput('')
    }
  }

  const filteredItems = search.trim()
    ? items.filter(item =>
      item.name.toLowerCase().includes(search.trim().toLowerCase()))
    : items

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            placeholder='Search items'
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder='Add item'
          />
          <Button title='Add' onPress={addItem} />
        </View>
        <SwipeListView
          data={filteredItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.rowFront}>
              <Text>{item.name}</Text>
            </View>
          )}
          //NOT WORKING DONT KNOW WHY
        // renderHiddenItem={({ item }) => (
        //   <View style={styles.rowBack}>
        //     <Button
        //       title="Delete"
        //       color="#d11a2a"
        //       onPress={() => {
        //         setItems(prev => prev.filter(i => i.id !== item.id))
        //       }}
        //     />
        //   </View>
        // )}
        // rightOpenValue={-75}
        // disableRightSwipe
        />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  rowFront: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  name: {
    fontSize: 18,
  },
  rowBack: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    fontSize: 20
  },

});