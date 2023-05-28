import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 4px 10px;
  width: fit-content;
  border-radius: 5px;
  :nth-of-type(odd) {
    background-color:  #ecdbdb;
  }
  :hover {
    background-color: #b92f2c;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
