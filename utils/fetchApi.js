import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'fe5bd6ec34msh9c676bbf8be8484p1d2329jsn0f81688bf09c',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
}