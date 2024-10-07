import './gesture-handler';
import { StyleSheet } from 'react-native';
import Routes from './scr/assets/routes/index.routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes
       />
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
