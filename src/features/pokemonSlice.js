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
    loading: false,
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
            state.list = action.payload;
            state.loading = false;
            state.error = '';
        });
        builder.addCase(fetchPokemon.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(fetchPokemon.rejected, (state, action) =>{
            state.error = action.error.message;
            state.loading = false;
        });
    }
    
});

export const {setPokemon, setError, clearError} = pokemonSlice.actions;

export default pokemonSlice.reducer;