import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, StyledLink } from './FilmList.styled';

export const FilmList = ({ list }) => {
  const location = useLocation();
  //  console.log('location', location);
  return (
    <List>
      {list &&
        list.map(film => (
          <ListItem key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title || film.name}
            </StyledLink>
          </ListItem>
        ))}
    </List>
  );
};

FilmList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
