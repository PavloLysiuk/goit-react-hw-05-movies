import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchDetails } from 'api/api';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
import {
  BackButton,
  SectionWrapper,
  ContentWrapper,
  InfoWrapper,
  CastAndOverviewWrapper,
  Image,
  Title,
  Link,
} from 'pages/MovieDetails/MovieDetails.styled';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      const movieDetails = await fetchDetails(movieId);
      setMovie(movieDetails);
    }

    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(-1);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          width="300"
        />
        <InfoWrapper>
          <BackButton type="button" onClick={goBack}>
            <HiMiniArrowRightOnRectangle />
          </BackButton>
          <Title>{movie.title}</Title>
          {movie.original_title !== movie.title && (
            <Title>{movie.original_title ?? movie.name}</Title>
          )}
          <p>{movie.overview}</p>
          {movie.release_date && <p>Release date: {movie.release_date}</p>}
          {movie.popularity && <p>Popularity: {movie.popularity}</p>}
          {movie.vote_average && (
            <p>
              <span>IMDB</span> {movie.vote_average.toFixed(1)} (
              {movie.vote_count})
            </p>
          )}
          <a href={movie.homepage} target="_blank" rel="noreferrer">
            Homepage
          </a>
        </InfoWrapper>
      </ContentWrapper>
      <CastAndOverviewWrapper>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </CastAndOverviewWrapper>
      <Outlet />
    </SectionWrapper>
  );
}

export default MovieDetails;
