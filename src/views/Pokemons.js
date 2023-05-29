import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, FlatList, TextInput } from "react-native";
import Pokemon from "../components/Pokemon";
import DecoratedTexInput from "../components/DecoratedTextInput";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getAllPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      const { results } = response.data;
      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      setPokemons(pokemonData);
      setFilteredPokemons(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <View>

      <DecoratedTexInput 
        placeholder={"Buscar Pokemon"}
        setValue={handleSearch}
        value={searchText}
      />
      {/* <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginBottom: 10 }}
        placeholder="Buscar Pokémon"
        onChangeText={handleSearch}
        value={searchText}
      /> */}
      <FlatList
        data={filteredPokemons}
        renderItem={({ item }) => <Pokemon pokemon={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Pokemons;
