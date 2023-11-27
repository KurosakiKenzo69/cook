import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Accueil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page d'accueil !</Text>
      <Text style={styles.subtitle}>Ceci est un exemple de page d'accueil en React Native.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Accueil;
