import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import { ReviewsList } from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        // console.log('data in Reviews', data);
        setReviews(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 ? (
        <ReviewsList list={reviews} />
      ) : (
        `Sorry, we don't have reviews for this movie`
      )}
    </>
  );
};

export default Reviews;
