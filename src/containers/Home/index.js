import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'
import { getPokemons } from '../../api/getPokemons';
import { setPokemons } from "../../actions/index";


const Home = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    

  useEffect(() => {
    getPokemons().then((res) => {
        dispatch(setPokemons(res.results));
    });
  });

  return (
    <div className="Home">
      <SearchBar />
      <PokemonList pokemons={list} />
    </div>
  );
};

export default Home;