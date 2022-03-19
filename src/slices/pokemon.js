import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons';
import { toogleLoader, setError } from './ui';

const initialState = {
    list: [],
}

export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async (_, { dispatch }) => {
        try {
            dispatch(toogleLoader());
            const response = await getPokemons();
            const pokemons = response.results;
            const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
            dispatch(setPokemons(pokemonsWithDetails));
            dispatch(toogleLoader());
        } catch (e) {
            dispatch(setError(e.message));
            dispatch(toogleLoader());
        }
    }
);

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.list = action.payload;
        },

        setFavorite: (state, action) => {

            const currentPokemonIndex = state.list.findIndex(pokemon => pokemon.id === action.payload.id);
            if (currentPokemonIndex !== -1) {
                state.list[currentPokemonIndex].isFavorite = !state.list[currentPokemonIndex].isFavorite;
            }
        }
    }
}
);


export const { setPokemons, setFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;