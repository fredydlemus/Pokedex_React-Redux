import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'

import { fetchPokemons, getPokemonsWithDetails } from "../../actions/index";
import Loader from '../../components/Loader';


const Home = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state);


  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="Home">
      <SearchBar />
      {loading && <Loader />}
      <PokemonList pokemons={list} />
    </div>
  );
};

export default Home;