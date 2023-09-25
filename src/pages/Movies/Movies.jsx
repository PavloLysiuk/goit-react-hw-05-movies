import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMovie } from 'api/api';
import { GrFormSearch } from 'react-icons/gr';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
import {
  MovieListWrapper,
  Form,
  Input,
  BackButton,
  SearchButton,
} from 'pages/Movies/Movie.styled';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const navigate = useNavigate();

  useEffect(() => {
    async function getMovie() {
      try {
        const { result } = await fetchMovie(movieName);
        setMovies(result);
      } catch (error) {
        console.log('error', error);
      }
    }

    if (movieName !== '') {
      getMovie();
    }
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: search });
    setSearch('');
  };

  const handleSearch = evt => {
    setSearch(evt.currentTarget.value);
  };

  const goBack = () => navigate(-1);

  return (
    <MovieListWrapper>
      <BackButton type="button" onClick={goBack}>
        <HiMiniArrowRightOnRectangle />
      </BackButton>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title..."
          onChange={handleSearch}
          value={search}
        />
        <SearchButton type="submit">
          <GrFormSearch />
        </SearchButton>
      </Form>
      <MoviesList moviesList={movies} />
    </MovieListWrapper>
  );
};

export default Movies;
