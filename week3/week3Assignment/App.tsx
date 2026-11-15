import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import AppBar from './components/AppBar';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" 
        screenOptions={{
          header: (props) => <AppBar {...props}/>
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
}