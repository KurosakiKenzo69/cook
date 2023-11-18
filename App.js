import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

// Importez vos écrans ici
import Connexion from './components/views/Connexion';
// Importez vos autres écrans ici

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false}}/>
        {/* Ajoutez vos autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
