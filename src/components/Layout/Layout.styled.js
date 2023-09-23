import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NawWrapper = styled.nav`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #339999;
`;

export const Link = styled(NavLink)`
  color: #ffffff85;
  font-weight: 700;
  text-decoration: none;

  transition: all 0.2s ease;

  &.active {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;
