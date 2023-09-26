import { styled } from 'styled-components';

export const MovieListWrapper = styled.ul`
  margin: 0 auto 40px;
  padding: 0 24px;
  max-width: 1164px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 12px;
`;

export const SearchnWrapper = styled.div`
  margin: 0 auto ;
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
`;

export const Form = styled.form`
  display: flex;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
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

export const SearchButton = styled.button`
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
    width: 24px;
    height: 24px;

    path {
      stroke: #ffffff;
    }
  }
`;
