import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import './styles.css';

const SearchBar = () => {
    return (
        <div className='Searcher wrapper'>
            <Grid>
                <Grid.Column
                    widescreen={10}
                    largeScreen={10}
                    mobile={16}
                    className='Searcher'>
                    <Search
                        aligned='right'
                        input={{ fluid: true }}
                        showNoResults={false}
                        placeholder='Found your favorite pokemon'
                    />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SearchBar