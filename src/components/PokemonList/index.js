import React from "react";
import PokemonCard from './PokemonCard';
import { Grid } from "semantic-ui-react";
import './styles.css';

const PokemonList = ({pokemons = []}) => {
    
    

    return (
      <Grid className="PokemonList">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </Grid>
    );
};

export default PokemonList;