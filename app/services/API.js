import { API_KEY, BASE_URL } from '../config';

export const GET_API = async (url) => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`; // Concatena los links

  let response = await fetch(API_URL, { method: 'GET' });
  response = response.json(); // Respuesta en json
  return response;
};
