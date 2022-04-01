import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import "./styles.css";
import { fetchPokemon } from '../../features/pokemonSlice';



const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemon.list);
    

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  
  return (
    <div className="Home">
      <SearchBar />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default Home;