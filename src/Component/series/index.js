import React, { Component } from 'react';
import { api } from '../../Services.js';
import { OptionsMovie, Img, Percent, ContainerMovie } from './styles.js';

class Series extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const resposta = await api.getbyseries();
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
        <h2>Series</h2>
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
      </ContainerMovie>
    );
  }
}
export default Series;
