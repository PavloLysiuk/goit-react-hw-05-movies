import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchMovie } from 'api/api';

import { GrFormSearch } from 'react-icons/gr';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
import {
  SearchnWrapper,
  Form,
  Input,
  BackButton,
  MovieListWrapper,
  SearchButton,
} from 'pages/Movies/Movie.styled';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [ifSearch, setIfSearching] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const navigate = useNavigate();

  useEffect(() => {
    const getMovieList = async () => {
      try {
        setIfSearching(false);
        const { results } = await fetchMovie(movieName);
        setSearch(results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIfSearching(true);
      }
    };
    if (movieName !== '') {
      getMovieList();
    }
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = evt.target[0].value;
    setSearchParams({ name });
    form.reset();
  };

  const goBack = () => navigate(-1);

  return (
    <>
      <SearchnWrapper>
        <BackButton type="button" onClick={goBack}>
          <HiMiniArrowRightOnRectangle />
        </BackButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter movie title..."
          />
          <SearchButton type="submit">
            <GrFormSearch />
          </SearchButton>
        </Form>
      </SearchnWrapper>
      <MovieListWrapper>
        {ifSearch && search.length === 0 ? (
          <p>No movies found!</p>
        ) : (
          <MoviesList moviesList={search} />
        )}
      </MovieListWrapper>
    </>
  );
};

export default Movies;
