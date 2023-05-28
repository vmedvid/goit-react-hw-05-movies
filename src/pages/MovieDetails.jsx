import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieById } from 'services/API';
import { Link } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import styled from '@emotion/styled';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: black;
  &.active {
  }
  :hover {
    color: #b92f2c;
    text-decoration: underline;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // console.log('movieId', movieId);

  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        // console.log('data', data);
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <main>
      <StyledLink to={goBack.current}>
        <FaAngleDoubleLeft size={16} /> Go back
      </StyledLink>
      {movie && (
        <>
          <MovieCard film={movie} />
          <p>Additional information</p>
          <ul>
            <li>
              <StyledLink to={'cast'}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to={'reviews'}>Reviews</StyledLink>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
