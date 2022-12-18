import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const KEY = 'e145377b3a98d62607e7dc90339d279b';

export const fetchMovies = page => {
  return axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=e145377b3a98d62607e7dc90339d279b`
  );
};
