import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'; 
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("App Executed!")
  return (
    <WelcomeScreen/>
  );
}
