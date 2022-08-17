import React, { Component } from 'react';
import axios from 'axios';

const MovieOnline = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=66d36dafdeb9769a99c785462aaf7343&language=en-US&page=1',
});

class Movies extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const resposta = await MovieOnline.get();
    // console.log(resposta);

    const AllFilmes = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        // nome: item.original_title,
      };
    });
    // console.log(AllFilmes);
    this.setState({
      movies: AllFilmes,
    });
    // console.log(this.state.movies);
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((item, index) => (
            <li key={index}>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <p>{item.nome}</p>
              <p>{item.overview}</p>
              <p>{item.vote_average}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Movies;
//https://developers.themoviedb.org/3/movies/get-popular-movies
