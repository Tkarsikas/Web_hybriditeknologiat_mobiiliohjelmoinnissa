import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import dummyData from './data/dummyData';
import Row from './components/Row';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ScrollView Example</Text>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        >
        {dummyData.map((item) => (
          <Row 
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
        </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
})

