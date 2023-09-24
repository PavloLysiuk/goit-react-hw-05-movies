import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'api/api';
import { MovieListWrapper, Title } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchTrending();
        setTrending(results);
      } catch (error) {
        console.log('error', error);
      }
    };

    getTrending();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieListWrapper>
        <MoviesList moviesList={trending} />
      </MovieListWrapper>
    </main>
  );
};

export default Home;
