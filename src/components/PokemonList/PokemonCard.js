import React from 'react';
import { Grid, Icon, Image, Label } from 'semantic-ui-react';
<<<<<<< HEAD
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';
import { Link } from 'react-router-dom';
=======
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../slices/pokemon';

const PokemonCard = ({ pokemon }) => {

    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(setFavorite({ id: pokemon.id }));
    }

    const color = pokemon.isFavorite ? FAV_COLOR : DEFAULT_COLOR;
>>>>>>> 0afc624823764ea89d3656938073973be232f57c

    return (
      <Link to={`pokemon/${pokemon.id}`} style={{width: '100%'}}>
        <Grid.Column mobile={16} tablet={8} computer={4}>
<<<<<<< HEAD
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
=======
            <div className='PokemonCard'>
                <button className='PokemonCard-favorite' onClick={handleFavorite}>
                    <Icon name='heart' color={color} />
                </button>
                <Image centered src={pokemon.sprites.front_default} alt='Pokemon Front' />
                <p className='Pokemon-title'>{pokemon.name}</p>
                {pokemon.types.map((type, index) => (
                    <Label color={MAIN_COLOR} key={index} >{type.type.name}</Label>
                ))}
            </div>
>>>>>>> 0afc624823764ea89d3656938073973be232f57c
        </Grid.Column>
      </Link>
    );
}

export default PokemonCard