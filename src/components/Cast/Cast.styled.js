import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 12px;
  list-style: none;
`;

export const Item = styled.li`
  width: 204px;

  border-radius: 8px;
  overflow: hidden;
  background-color: #eff2f5;
`;

export const Image = styled.img`
  width: 100%;
  height: 306px;
  border-radius: 8px;
`;

export const Blank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 306px;
  border-radius: 8px;
  background: #dddddd;
  color: #888888;
  font-weight: 500;
`;

export const InfoWrapper = styled.div`
  padding: 8px 12px;
`;

export const Person = styled.p`
  font-weight: 700;
  color: #294ea5;
`;
export const Character = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #294ea5;
`;
