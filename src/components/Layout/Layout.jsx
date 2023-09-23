import { Outlet } from 'react-router-dom';
import { NavWrapper, Link } from './Layout.styled';
import { GrFormSearch } from 'react-icons/gr';

export const Layout = () => {
  return (
    <div>
      <NavWrapper>
        <Link to="/">Trends</Link>
        <Link to="/movies">
          Search
          <GrFormSearch />
        </Link>
      </NavWrapper>
      <Outlet />
    </div>
  );
};
