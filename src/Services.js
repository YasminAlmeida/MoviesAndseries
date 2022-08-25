import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '66d36dafdeb9769a99c785462aaf7343',
  },
});
export const api = {
  get() {
    return axiosInstance.get(`/movie/popular`);
  },
  getbyseries() {
    return axiosInstance.get(`/tv/popular`);
  },
};
