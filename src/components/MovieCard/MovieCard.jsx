import PropTypes from 'prop-types';
import { CardContainer, Poster } from './MovieCard.styled';

export const MovieCard = ({ film }) => {
  //   console.log('film', film);
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;
  return (
    <CardContainer>
      <Poster
        width={250}
        src={`https://www.themoviedb.org/t/p/w500//${poster_path}`}
        alt={title || name}
      ></Poster>
      <div>
        <h2>
          {title}
          <span> ({release_date.substring(0, 4)})</span>
        </h2>
        <p>User rating: {vote_average.toFixed(1)}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <span> {genres.map(({ name }) => name).join(', ')}</span>
      </div>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
