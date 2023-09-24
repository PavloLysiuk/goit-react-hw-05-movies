import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Link,
  Item,
  Image,
  MovieTitle,
  Imdb,
} from 'components/MoviesList/moviesList.styled';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <>
      {moviesList.map(movie => (
        <Item key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            width="300"
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
          <Imdb>{movie.vote_average.toFixed(1)}</Imdb>
        </Item>
      ))}
    </>
  );
};
