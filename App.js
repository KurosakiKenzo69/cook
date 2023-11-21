import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
//import db, {createTables} from './global/db/DB.js'
import {useEffect, useState} from "react";
import Connexion from './components/views/Connexion';
import Inscription from './components/views/Inscription';
import {navigationRef} from "./global/navigation/RootNavigation";


const Stack = createStackNavigator();



function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false}}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{headerShown: false}}/>
        {/* Ajoutez vos autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
