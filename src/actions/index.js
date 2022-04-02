
import { SET_POKEMON, SET_FAVORITE, SET_ERROR, CLEAR_ERROR, FETCH_POKEMONS, TOGGLE_LOADING } from "./type";

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS
})

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})