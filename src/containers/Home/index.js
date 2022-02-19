import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'
import { getPokemons } from '../../api/getPokemons';
import { setError, setPokemons } from "../../actions/index";


const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);
    

  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemons(res.results));
      })
      .catch((error) => {
        dispatch(setError({ message: "Error", error }));
      });
  }, []);

  return (
    <div className="Home">
      <SearchBar />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default Home;