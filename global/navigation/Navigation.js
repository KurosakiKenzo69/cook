// Votre fichier de navigation (par exemple AppNavigator.js)

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from '../../components/views/Connexion';
// Importez vos autres écrans ici

const AppNavigator = createStackNavigator(
  {
    Connexion: {
      screen: Connexion,
    },
    // Définissez vos autres écrans ici
  },
  {
    initialRouteName: 'Connexion', // Définit l'écran de connexion comme écran initial
  }
);

export default createAppContainer(AppNavigator);
