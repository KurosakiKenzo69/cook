import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from "react";
import Connexion from './components/views/Connexion';
import Inscription from './components/views/Inscription';


const Stack = createStackNavigator();



function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false}} />
        <Stack.Screen
          name="Inscription" component={Inscription} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
