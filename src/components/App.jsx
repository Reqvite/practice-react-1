import { Component } from 'react';
import { Button } from './Button';
import { MoviesGallery } from './MoviesGallery';

import { fetchMovies } from 'service/api';

export class App extends Component {
  state = {
    movies: [],
    isMoviesShown: false,
    page: 1,
    isLoading: false,
    currentImg: null,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.isMoviesShown !== this.state.isMoviesShown &&
      this.state.isMoviesShown
    ) {
      fetchMovies(this.state.page).then(({ data: { results } }) =>
        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
        }))
      );
    }
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ isMoviesShown: !prevState.isMoviesShown }));
  };

  openModal = img => {
    this.setState({ currentImg: img });
  };

  render() {
    const { isMoviesShown, movies } = this.state;
    return (
      <>
        <Button
          clickHandler={this.toggleVisibility}
          text={!isMoviesShown ? 'Show movies' : 'Hide movies'}
        />
        {movies.length > 0 && (
          <MoviesGallery movies={movies} movieModal={this.openModal} />
        )}
      </>
    );
  }
}
