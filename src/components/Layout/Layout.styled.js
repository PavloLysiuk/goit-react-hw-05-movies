import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  padding: 12px 0;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 16px;
  border-radius: 0 0 8px 8px;
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
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;

  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

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
  }

  &.active,
  &:hover {
    color: #ffffff;
    svg {
      background-color: #efc100;
    }
  }
`;

export const Logo = styled(NavLink)`
margin-right: 24px;
  display: flex;
  align-items: center;
  color: #efc100;
  text-transform: uppercase;
  font-size: 16px;

  font-weight: 900;
  text-decoration: none;

  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    font-weight: 900;
    color: #ffffff;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
