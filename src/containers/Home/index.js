import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../components/PokemonList";
import SearchBar from "../../components/Searcher";
import "./styles.css";
import { fetchPokemon } from "../../features/pokemonSlice";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if(pokemons.length === 0){
      dispatch(fetchPokemon());
    }
  }, []);

  return loading ? (
    <Loader />
  ) : error !== "" ? (
    <div>Error...</div>
  ) : (
    <div className="Home">
      <SearchBar />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default Home;
