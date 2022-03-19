import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'

import { fetchPokemons } from "../../slices/pokemon";
import Loader from '../../components/Loader';


const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.pokemon.list);
  const loading = useSelector(state => state.ui.loading)


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