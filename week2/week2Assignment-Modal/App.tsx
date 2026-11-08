import { Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import  { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.modalText}>Show modal message</Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is Modal...</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={[styles.modalText, styles.bold]}>Close</Text>
            </Pressable>
          </View>
      </Modal>
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
  modalContent: {
    backgroundColor: '#cfcece',
    alignItems: 'center',
    marginTop: 50,
    boxShadow: '0px 4px 12px rgba(0,0,0,0.25)',
    elevation: 10,
  },
  modalText: {
    paddingVertical: 20,
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold'
  }
});
