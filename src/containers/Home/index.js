import React from 'react';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/Searcher';
import './styles.css'

const Home = () => {
    return (
        <div className='Home'>
            <SearchBar />
            <PokemonList />
        </div>
    )
}

export default Home;