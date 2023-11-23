import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ComponentButton from './elements/ComponentButton';

const Inscription = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSignUp = async () => {
    try {expo 
      const userData = {
        name: `${firstName} ${lastName}`,
        tel: phone,
        mail: email,
        login: email,
        password: password,
      };

      // Envoi de la requête HTTP POST vers votre API PHP
      const response = await fetch('http://localhost/apiCook/createUser.php?action=createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const result = await response.json();
      console.log(result.message); // Affichage du message de la réponse

      // Réinitialiser les états après l'inscription réussie
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setLogin('');
      setPassword('');
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
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
