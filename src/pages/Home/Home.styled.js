import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)``;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  color: #294ea5;
`;

export const MovieListWrapper = styled.ul`
  margin: 0 auto 40px;
  padding: 0 24px;
  max-width: 1164px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 12px;
`;
