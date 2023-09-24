import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #294ea5;
`;

export const MovieTitle = styled.h2`
  width: 246px;
  text-align: center;
  font-size: 16px;

  text-decoration: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Imdb = styled.p`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  color: #2930a5;
  background-color: #efc100;
  font-weight: 500;
`;
