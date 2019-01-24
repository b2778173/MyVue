/**
 * Created by superman on 2016/12/2.
 */
import axios from 'axios';

// 使用代理
const HOST = process.env.NODE_ENV === 'development' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8081';

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
  }
};

export function fetch(url) {

  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
      .then(response => {
        resolve(response.data);
      })
  })
}

export async function fetch2(url, component) {
  try {
    console.log('URL=', HOST + url)
    const res = await axios(HOST + url);
    return await res.data;

  } catch (err) {
    component.$router.push({
      name: 'error',
      params: {
        errMsg: err.response.status+' '+err.response.statusText
      }
    });
    console.log(err);
  }
}

export function fetchItemByType(type, component) {
  return fetch2(type, component);
}


export function fetchMoviesByType(type, start = 0, count = 20, component) {
  return fetchItemByType(`/movie/${type}?start=${start}&count=${count}`, component)
}

export function fetchMovieById(id, component) {
  return fetch2(`/movie/subject/${id}`, component);
}

export function fetchSearchMovies(query, start = 0, component) {
  let url = encodeURI(`/movie/search?q=${query}&start=${start}`);
  return fetch2(url, component);
}
