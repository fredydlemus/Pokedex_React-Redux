import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../features/pokemonSlice";
import Loader from "../../components/Loader/Loader";

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) =>
    state.pokemon.list.find((pokemon) => pokemon.id === +id)
  );
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);

  React.useEffect(() => {
    if (pokemon === undefined) {
      dispatch(fetchPokemon());
    }
  }, []);

  console.log(pokemon);
  return loading ? (
    <Loader />
  ) : error ? (
    <div>Error...</div>
  ) : (
    <div>{pokemon.name}</div>
  );
};

export default PokemonDetail;
