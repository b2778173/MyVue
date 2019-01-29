/**
 * Created by superman on 2016/12/2.
 */
import axios from 'axios';

// 使用代理
const HOST = process.env.NODE_ENV === 'development' ? 'http://api.douban.com/v2' : 'http://localhost:8081';

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
  }
};

export function fetch(url) {

  return new Promise((resolve, reject) => {
    axios.get('/api' + url)
      .then(response => {
        console.log('URL=', HOST + url)
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

export async function attraction(){
  return await axios('/attractions');
}

export function fetchItemByType(type, component) {
  return fetch(type, component);
}


export function fetchMoviesByType(type, start = 0, count = 20, component) {
  return fetchItemByType(`/movie/${type}?start=${start}&count=${count}`, component)
}

export function fetchMovieById(id, component) {
  return fetch(`/movie/subject/${id}`, component);
}

export function fetchSearchMovies(query, start = 0, component) {
  let url = encodeURI(`/movie/search?q=${query}&start=${start}`);
  return fetch(url, component);
}
