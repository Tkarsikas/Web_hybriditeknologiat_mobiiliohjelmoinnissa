import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import DatePicker from 'react-native-ui-datepicker';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';

export default function App() {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const [showPicker, setShowPicker] = useState<boolean>(false)

  const handlePress = () => setShowPicker(true)

  const handleChange = ({ date: newDate }: { date: any }) => {
    setDate(newDate ? dayjs(newDate) : null)
    setShowPicker(false)
  }
  
  return (
    <View style={styles.container}>
      {!showPicker ? (
        <Pressable onPress={handlePress} style={styles.pressable}>
          <Text style={styles.title}>Pick a Date</Text>
        </Pressable>
      ) : (
      <DatePicker 
        date={date}
        onChange={handleChange}
        mode='single'
      />
      )}
      <Text style={styles.selectedDate}>
        Selected: {date ? date.format('YYYY-MM-DD') : 'None'}
      </Text>
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
  pressable: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDate: {
    marginTop: 24,
    fontSize: 18,
    color: '#333'
  }
});
