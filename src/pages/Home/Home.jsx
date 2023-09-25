import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'api/api';
import { MovieListWrapper, Title } from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchTrending();
        setMoviesList(results);
      } catch (error) {
        console.log('error', error);
      }
    };

    getTrending();
  }, []);

  return (
    <main>
      <section>
        <Title>Trending today</Title>
        <MovieListWrapper>
          <MoviesList moviesList={moviesList} />
        </MovieListWrapper>
      </section>
    </main>
  );
};

export default Home;
