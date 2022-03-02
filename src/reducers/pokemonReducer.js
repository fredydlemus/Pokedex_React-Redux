import { CLEAR_ERROR, SET_ERROR, SET_FAVORITE, SET_POKEMON, TOGGLE_LOADING } from "../actions/type";

const initialState = {
    list: [],
    error: '',
    loading: false,
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return { ...state, list: action.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.list];
            const currentPokemonIndex = newPokemonList.findIndex(elem => elem.id === action.payload.pokemonId);
            if (currentPokemonIndex !== -1) {
                newPokemonList[currentPokemonIndex].isFavorite = !newPokemonList[currentPokemonIndex].isFavorite;
            }
            return { ...state, list: newPokemonList };
        case SET_ERROR:
            return { ...state, error: action.payload.message };
        case CLEAR_ERROR:
            return { ...state, error: "" };
        case TOGGLE_LOADING:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default pokemonReducer;