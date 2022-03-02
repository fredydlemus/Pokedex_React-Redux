import axiosInstance from "./config"
export const getPokemons = (limit = 151) => axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export const getPokemonsWithDetails = () => {
    return getPokemons()
        .then((res) => {
            const pokemonList = res.results;
            return Promise.all(
                pokemonList.map((pokemon) => axiosInstance.get(pokemon.url))
            );

        }).then((pokemonsResponse) => {
            const pokemonsData = pokemonsResponse.map((response) => response.data);
            return pokemonsData;

        })

}
