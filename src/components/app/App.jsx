import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Blocks } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <Blocks
          visible={true}
          height="180"
          width="180"
          ariaLabel="blocks-loading"
          wrapperStyle={{
            margin: '0 auto',
            display: 'flex',
            height: '100vh',
          }}
          wrapperClass="blocks-wrapper"
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
