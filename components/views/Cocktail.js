import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

const Cocktail = () => {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.drinks) {
          setCocktails(data.drinks);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => favorites.includes(id);
  const renderCocktailItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => toggleFavorite(item.idDrink)}>
      <Image source={{ uri: item.strDrinkThumb }} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.strDrink}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item.idDrink)}>
        <Text style={[styles.favoriteIcon, isFavorite(item.idDrink) ? styles.favoriteSelected : null]}>
          {isFavorite(item.idDrink) ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Cocktails</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un cocktail..."
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={() => {
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
              if (data && data.drinks) {
                setCocktails(data.drinks);
              }
            })
            .catch(error => console.error(error));
        }}
        value={searchQuery}
      />
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCocktailItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  itemText: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  favoriteIcon: {
    fontSize: 20,
    marginTop: 5,
  },
  favoriteSelected: {
    color: 'red', // Couleur du cœur sélectionné
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
export default Cocktail;
