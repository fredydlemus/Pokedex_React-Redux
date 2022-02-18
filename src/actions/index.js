import { SET_POKEMON } from "./type";

export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload,
});