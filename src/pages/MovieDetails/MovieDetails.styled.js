import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionWrapper = styled.section`
  margin: 40px auto;
  padding: 24px 24px;
  max-width: 1116px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const ContentWrapper = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
  p {
    color: #294ea5;
  }
  span {
    background-color: #efc100;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;

export const CastAndOverviewWrapper = styled.div`
  margin-top: 24px;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
  border-radius: 8px;
  background-color: #294ea5;
`;

export const Image = styled.img`
margin-bottom: 24px;
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1;
  color: #294ea5;
`;

export const HomePage = styled.a`
  width: 105px;
  padding: 4px 8px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  background-color: rgba(0, 130, 0, 1);
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(0, 110, 0, 1);
  }
`;

export const BackButton = styled.button`
  margin-right: 4px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: tomato;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: red;
  }

  svg {
    width: 20px;
    height: 20px;
    rotate: 180deg;

    path {
      fill: #ffffff;
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff85;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active,
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
