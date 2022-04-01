import axiosInstance from "./config";
import axios from "axios";

export const getPokemons = (limit = 151) => axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then(res => res.data)
    .catch(err => console.log(err));



export const getPokemonWithDetails = () =>{
  return getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map((response) => response.data);
      return pokemonsData;
    });
}