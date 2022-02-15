import React, { useEffect } from 'react';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'
import { getPokemons } from '../../api/getPokemons';

const Home = () => {

    useEffect(() => {
        getPokemons().then(res => console.log(res));
    });

    return (
        <div className='Home'>
            <SearchBar />
            <PokemonList />
        </div>
    )
}

export default Home;