import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Cocktail = () => {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Appel à l'API pour obtenir la liste des cocktails
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(response => response.json())
      .then(data => {
        if (data && data.drinks) {
          setCocktails(data.drinks);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const toggleFavorite = (id) => {
    // Vérifie si le cocktail est déjà en favori
    const isFavorite = favorites.includes(id);
    
    // Ajoute ou supprime le cocktail des favoris
    if (isFavorite) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <View>
      <Text>Liste des Cocktails</Text>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <View>
            <Text>{item.strDrink}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.idDrink)}>
              <Text>{favorites.includes(item.idDrink) ? 'Retirer des favoris' : 'Ajouter aux favoris'}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Cocktail;
