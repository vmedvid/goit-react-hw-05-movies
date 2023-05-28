import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 15px;
  padding: 5px;
`;

export const ReviewsWrap = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ecdbdb;
`;

export const ReviewsAuthor = styled.div`
  margin: 5px 0;
  padding: 2px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const ReviewsContent = styled.div`
  margin: 5px 0;
  padding: 2px 10px;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
`;
