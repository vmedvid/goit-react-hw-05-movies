import styled from '@emotion/styled';

export const ActorCardContainer = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 20px;
  padding: 5px;
`;

export const ActorCard = styled.div`
  margin: 0;
  padding: 0;
  width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ecdbdb;
`;

export const ActorTitle = styled.div`
  margin: 5px 0;
  padding: 2px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const ActorRole = styled.div`
  margin: 5px 0;
  padding: 2px 10px;
  text-align: center;
  font-size: 14px;
`;
