import { Outlet } from 'react-router-dom';
import { NawWrapper, Link } from './Layout.styled';
export const Layout = () => {
  return (
    <div>
      <NawWrapper>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </NawWrapper>
      <Outlet />
    </div>
  );
};
