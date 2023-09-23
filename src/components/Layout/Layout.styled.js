import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  padding: 12px 0;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 0 0 20px 20px;
  background-color: #294ea5;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #ffffff85;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 4px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;

  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    color: #ffffff;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #ffffff85;
    background-color: #ffffff85;
    border-radius: 50%;
    transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

    path {
      stroke: #294ea5;
    }

    &:hover {
      background-color: #ffffff;
    }
  }

  &.active svg {
    background-color: #ffffff;
  }
`;
