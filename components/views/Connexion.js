import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ComponentButton from "./elements/ComponentButton";
import axios from 'axios';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Champs manquants', 'Veuillez remplir tous les champs');
      return;
    }
    const api = 'https://b4ca-159-84-186-206.ngrok-free.app/apiCook/connectUser.php';
    const headers = {
      'Content-Type': 'application/json'
    };

    const data = {
      login: username,
      password: password
    };
    
    try {
      const response = await axios.post(api, data, {
        headers: headers,
      });

      if (response.status === 200) {
        const result = response.data;
        navigation.navigate('Cocktail');
      }
      else {
        throw new Error('Erreur lors de la requête vers l\'API');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la connexion', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom d'utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize='none'
        />
      </View>

      <ComponentButton text="Se connecter" onPress={handleLogin} />
      <View style={styles.buttonsBottom}>
        <TouchableOpacity onPress={() => console.log('Mot de passe oublié')}>
          <Text style={styles.forgotPasswordButton}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Inscription');
        }}>
          <Text style={styles.signUpButton}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  title: {
    fontSize: 24,
    color: '#3d8af7',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#3d8af7',
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  forgotPasswordButton: {
    color: 'gray',
  },
  signUpButton: {
    color: '#3d8af7',
    marginTop: 10,
    alignSelf: 'flex-start',
    fontWeight: "bold",
    position: "relative",
    bottom: 10,
  },
  buttonsBottom: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30
  }
});

export default Connexion;
