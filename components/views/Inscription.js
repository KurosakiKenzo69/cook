import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ComponentButton from './elements/ComponentButton';
import axios from 'axios';

const Inscription = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState(''); 
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  

  const handleSignUp = async () => {
    if (name === '' || tel === '' || mail === '' || login === '' || password === '' || confirmPassword === '') {
      Alert.alert('Champs manquants', 'Veuillez remplir tous les champs');
      return;
      
    }

    if (password !== confirmPassword) {
      Alert.alert('Les mots de passe ne correspondent pas');
      return;
    }

    const fullName = `${name} ${prenom}`;

    const api = 'https://19d5-2a04-cec0-1071-360e-4c8f-1143-46ad-b8f0.ngrok-free.app/apiCook/postUser.php';
    const headers = {
      'Content-Type': 'application/json'
    };
    const data = {
      name: fullName,
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
        navigation.navigate('Connexion');
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
          placeholder="Prenom"
          onChangeText={(text) => setPrenom(text)}
          value={prenom}
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
          autoCapitalize='none'
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={(text) => setLogin(text)}
          value={login}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Retapez votre mot de passe"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          autoCapitalize="none"
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
    backgroundColor: '#fff', 
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
    borderBottomColor: '#ccc', 
  },
  input: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  signInButton: {
    color: '#3d8af7',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default Inscription;
