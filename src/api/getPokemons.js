import axiosInstance from "./config"
export const getPokemons = (limit = 151) => axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then(res => res.data)
    .catch(err => console.log(err));
