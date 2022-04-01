import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonWithDetails } from "../api/getPokemons";


export const fetchPokemon = createAsyncThunk(
    'fetchPokemonsWithDetails',
    async() =>{
        const response = await getPokemonWithDetails();
        return response;
    }
);

const initialState = {
    list: [],
    error: ''
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) =>{
            
            state.list = action.payload;
        },
        setError: (state) =>{
            state.error = "Error";
        },
        clearError: (state) =>{
            state.error = "";
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPokemon.fulfilled, (state, action) =>{
            console.log(action.payload);
            state.list = action.payload;
        });
    }
});

export const {setPokemon, setError, clearError} = pokemonSlice.actions;

export default pokemonSlice.reducer;