import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionWrapper = styled.section`
  margin: 40px auto;
  padding: 0 24px;
  max-width: 1400px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  display: flex;
  gap: 24px;
`;

export const Image = styled.img`
  width: 380px;
  border-radius: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1;
  color: #294ea5;
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
  background-color: #efc100;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff9f00;
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
  text-decoration: none;
  text-transform: uppercase;
  color: #294ea5;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active,
  &:hover,
  &:focus {
    color: #ff9f00;
  }
`;
