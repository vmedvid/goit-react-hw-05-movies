import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '12565cffb0d296cb69d2160e9bc02510';
const PAGE = 1;

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingFilms() {
  const response = await axios.get(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&page=${PAGE}`
  );
  return response.data.results;
}

export async function getFilms(request) {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${request}&include_adult=false&api_key=${API_KEY}&page=${PAGE}`
  );
  return response.data.results;
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getCast(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}
