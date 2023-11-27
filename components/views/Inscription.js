import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ComponentButton from './elements/ComponentButton';
import axios from 'axios';

const Inscription = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (name === '' || tel === '' || mail === '' || login === '' || password === '') {
      Alert.alert('Champs manquants', 'Veuillez remplir tous les champs');
      return;
    }

    const api = 'http://192.168.1.180/apiCook/createUser.php';
    const headers = {
      'Content-Type': 'application/json'
    };
    const data = {
      name: name,
      tel: tel,
      mail: mail,
      login: login,
      password: password
    };

    try {
      const response = await axios.post(api, data, {
        headers: headers,
      });
  
      if (response.status === 200) {
        const result = response.data;
        console.log(result.message); // Affichage du message de la réponse
  
        // Rediriger vers Accueil.js après inscription réussie
        navigation.navigate('Accueil');
      } else {
        throw new Error('Erreur lors de la requête vers l\'API');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'inscription', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          onChangeText={(text) => setTel(text)}
          value={tel}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setMail(text)}
          value={mail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={(text) => setLogin(text)}
          value={login}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <ComponentButton text="S'inscrire" onPress={handleSignUp} />
      <Pressable onPress={() => navigation.navigate('Connexion')}>
        <Text style={styles.signInButton}>Déjà un compte ?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
    backgroundColor: '#fff', // Fond blanc
  },
  title: {
    fontSize: 24,
    color: '#3d8af7',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Bordure basse grise pour les champs
  },
  input: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  signInButton: {
    color: '#3d8af7',
    marginTop: 20,
    textDecorationLine: 'underline', // Texte souligné
  },
});

export default Inscription;
