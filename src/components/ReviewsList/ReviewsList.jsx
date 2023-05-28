import PropTypes from 'prop-types';
import {
  ReviewsContainer,
  ReviewsWrap,
  ReviewsAuthor,
  ReviewsContent,
} from './ReviewsList.styled';

export const ReviewsList = ({ list }) => {
  //   console.log('list in ReviewsList', list);
  return (
    <ReviewsContainer>
      {list &&
        list.map(elem => (
          <ReviewsWrap key={elem.id}>
            <ReviewsAuthor>Author: {elem.author}</ReviewsAuthor>
            <ReviewsContent>{elem.content}</ReviewsContent>
          </ReviewsWrap>
        ))}
    </ReviewsContainer>
  );
};

ReviewsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
