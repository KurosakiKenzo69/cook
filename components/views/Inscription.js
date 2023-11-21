import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {registerUser} from '../../global/db/DB';
import { useNavigation } from '@react-navigation/native'
import ComponentButton from "./elements/ComponentButton";
import {navigationRef} from "../../global/navigation/RootNavigation"


const Inscription = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  

  const handleSignUp = async () => {
    try {
      const userData = {
        name: `${firstName} ${lastName}`,
        tel: phone,
        mail: email,
        login: email,
        password: password
      };
      const userId = await registerUser(userData);
      console.log('Utilisateur n°:', userId);

      // Réinitialiser les états après l'inscription réussie
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setPassword('');
      setAgreed(false);
    } catch (error) {
      console.error('Error signing up:', error);
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Prénom</Text>
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Téléphone</Text>
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
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
      <View style={styles.checkboxContainer}>
        <ComponentButton onPress={() => setAgreed(!agreed)}>
          <View style={styles.checkbox}>
            {agreed ? <Text style={styles.checkmark}>&#10003;</Text> : null}
          </View>
        </ComponentButton>
        <Text style={styles.checkboxLabel}>J'accepte les conditions d'utilisation</Text>
      </View>
      <ComponentButton text="S'inscrire" />

      <ComponentButton text="Déjà un compte ?" style={styles.signInButton}></ComponentButton>
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
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderColor: '#3d8af7',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    fontSize: 12,
    color: '#3d8af7',
  },
  checkboxLabel: {
    color: '#3d8af7',
  },
  signInButton: {
    color: 'gray',
    marginTop: 20,
  },
});

export default Inscription;
