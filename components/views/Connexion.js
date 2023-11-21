import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import inscription from "./Inscription";
import ComponentButton from "./elements/ComponentButton";
import {navigationRef} from "../../global/navigation/RootNavigation"


const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Votre logique de connexion ici (par exemple, avec la base de données)
    console.log('Username:', username);
    console.log('Password:', password);
    // Ajoutez votre logique pour vérifier les identifiants et authentifier l'utilisateur
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
        />
      </View>

      <ComponentButton text="Se connecter" onPress={handleLogin} />
      <View style={styles.buttonsBottom}>
      <TouchableOpacity onPress={() => console.log('Mot de passe oublié')}>
      <Text style={styles.forgotPasswordButton}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
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
