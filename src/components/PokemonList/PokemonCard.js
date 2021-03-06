import React from 'react';
import { Grid, Icon, Image, Label } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemon}) =>{
    return (
      <Link to={`pokemon/${pokemon.id}`} style={{width: '100%'}}>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <div className="PokemonCard">
            <Icon name="heart" color={FAV_COLOR} />
            <Image
              centered
              src={pokemon.sprites.front_default}
              alt="Pokemon Front"
            />
            <p className="Pokemon-title">{pokemon.name}</p>
            {pokemon.types.map((type) => (
              <Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>
                {type.type.name}
              </Label>
            ))}
          </div>
        </Grid.Column>
      </Link>
    );
}

export default PokemonCard