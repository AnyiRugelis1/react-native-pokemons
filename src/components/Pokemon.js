import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from '../css/Styles';

const Pokemon = ({ pokemon }) => {

  return (
    <TouchableOpacity style={styles.pokemon.container}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.pokemon.image} />
      <View style={styles.pokemon.content}>
        <Text style={styles.pokemon.title}>{pokemon.name}</Text>
        <Text style={styles.pokemon.description}>Weight: {pokemon.weight}</Text>
        <Text style={styles.pokemon.description}>Height: {pokemon.height}</Text>
        {/* Agrega más detalles o propiedades del Pokémon aquí */}
      </View>
    </TouchableOpacity>
  );
}

export default Pokemon;
