import { Component } from 'react';
import { Button } from './Button';
import { MoviesGallery } from './MoviesGallery';

import { fetchMovies } from 'service/api';
import { Modal } from './Modal/Modal';

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
    if (this.state.isMoviesShown) {
      this.setState({ movies: [] });
    }
  };

  openModal = img => {
    this.setState({ currentImg: img });
  };
  closeModal = () => {
    this.setState({ currentImg: null });
  };

  render() {
    const { isMoviesShown, movies, currentImg } = this.state;
    return (
      <>
        <Button
          clickHandler={this.toggleVisibility}
          text={!isMoviesShown ? 'Show movies' : 'Hide movies'}
        />
        {movies.length > 0 && (
          <MoviesGallery movies={movies} movieModal={this.openModal} />
        )}
        {currentImg && (
          <Modal image={currentImg} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
