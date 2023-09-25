import { Outlet } from 'react-router-dom';
import { NavWrapper, Logo, Link } from './Layout.styled';
import { GrFormSearch } from 'react-icons/gr';
import { TbMovie } from 'react-icons/tb';

export const Layout = () => {
  return (
    <div>
      <NavWrapper>
        <Logo to="/">
          <TbMovie />
          Movie<span>Finder</span>
        </Logo>
        <Link to="/">Home</Link>
        <Link to="/movies">
          Movies
          <GrFormSearch />
        </Link>
      </NavWrapper>
      <Outlet />
    </div>
  );
};
