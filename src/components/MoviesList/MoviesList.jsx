import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Link,
  Item,
  Image,
  MovieTitle,
  Year,
  Imdb,
} from 'components/MoviesList/moviesList.styled';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <>
      {moviesList.map(movie => {
        const releaseDate = new Date(movie.release_date);
        const isValidDate = !isNaN(releaseDate);
        const releaseYear = isValidDate ? releaseDate.getFullYear() : 'Unknown';
        return (
          <Item key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              width="270"
            />
            <Link
              to={
                location.pathname === '/movies'
                  ? `${movie.id}`
                  : `movies/${movie.id}`
              }
              state={{ from: location }}
            >
              <MovieTitle>{movie.title ?? movie.name}</MovieTitle>
            </Link>
            {isValidDate && <Year>{releaseYear}</Year>}
            <Imdb>IMDB: {movie.vote_average.toFixed(1)}</Imdb>
          </Item>
        );
      })}
    </>
  );
};
