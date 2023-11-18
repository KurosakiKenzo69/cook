import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './elements/Button'; // Assurez-vous du chemin correct

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Votre logique de connexion ici (par exemple, avec la base de données)
    console.log('Username:', username);
    console.log('Password:', password);
    // Ajoutez votre logique pour vérifier les identifiants et authentifier l'utilisateur
  };

  const handleForgotPassword = () => {
    // Logique pour gérer le mot de passe oublié
  };

  const handleSignUp = () => {
    // Logique pour gérer l'inscription
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cook</Text>
      <Text style={styles.h2}>Connexion</Text>
      <Text style={styles.label}>Nom d'utilisateur</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button text="Se connecter" onPress={handleLogin} />

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordButton}>Mot de passe oublié</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpButton}>Inscription</Text>
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

  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 45,
    marginEnd: 200,
  },

  title: {
    fontSize: 24,
    color: '#3d8af7',
    marginBottom: 100,
    marginTop: 100,
    fontWeight: 'bold',
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
    marginBottom: 15,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 300,
  },
  forgotPasswordButton: {
    color: 'gray',
  },
  signUpButton: {
    color: '#3d8af7',
  },
});

export default Connexion;
