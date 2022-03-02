import { call, put, takeEvery } from 'redux-saga/effects';
import { setPokemons, toggleLoading } from '../actions';
import { FETCH_POKEMONS } from '../actions/type';
import { getPokemonsWithDetails } from '../api/getPokemons';


function* fetchPokemonWithDetails(action) {
    try {
        yield put(toggleLoading());
        const pokemonsWithDetails = yield call(getPokemonsWithDetails);
        yield put(setPokemons(pokemonsWithDetails))
        yield put(toggleLoading());
    } catch (e) {
        console.log(e);
    }
}

function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);

}

export default pokemonSaga;