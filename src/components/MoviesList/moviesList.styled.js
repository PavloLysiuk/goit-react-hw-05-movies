import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
  position: absolute;
  height: 400px;
  overflow: auto;
  color: #ffffff;
  transform: translateX(-100%);
  padding: 12px;
  background-color: rgba(41, 78, 165, 0.9);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  p {
    margin-bottom: 12px;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    ${Overlay} {
      transform: translateX(0);
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  border-radius: 12px;
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
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.p`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  color: #ffffff;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  background-color: green;
  font-size: 14px;
  font-weight: 500;
`;

export const Imdb = styled.p`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  color: #ffffff;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  background-color: orange;
  font-size: 14px;
  font-weight: 500;
`;
