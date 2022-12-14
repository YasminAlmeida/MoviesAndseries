import React, { Component } from 'react';
import Series from '../../Component/series/index.js';
import { api } from '../../Services.js';
import {
  OptionsMovie,
  Img,
  Percent,
  ContainerMovie,
  InputSearch,
} from './styles.js';
class Movies extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const resposta = await api.get();
    const AllFilmes = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });
    this.setState({
      movies: AllFilmes,
    });
  };
  render() {
    return (
      <ContainerMovie>
        <InputSearch>
          <input type="text" />
          <button>Search</button>
        </InputSearch>
        <h2>Movies</h2>
        <OptionsMovie>
          <ul>
            {this.state.movies.map((item, index) => (
              <li key={index}>
                <Img>
                  <img src={item.image} alt={item.title} />
                </Img>
                <p>{item.nome}</p>
                {/* <p>{item.overview}</p> */}
                <Percent>
                  <span>{item.vote_average}</span>
                </Percent>
              </li>
            ))}
          </ul>
        </OptionsMovie>
        <Series />
      </ContainerMovie>
    );
  }
}
export default Movies;
