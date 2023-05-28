import PropTypes from 'prop-types';
import {
  ActorCard,
  ActorCardContainer,
  ActorTitle,
  ActorRole,
} from './CastCard.styled';

export const CastCard = ({ inCast }) => {
  return (
    <ActorCardContainer>
      {inCast &&
        inCast.map(elem => (
          <ActorCard key={elem.id}>
            <img
              width={150}
              src={`https://www.themoviedb.org/t/p/w500//${elem.profile_path}`}
              alt={elem.name}
            ></img>
            <ActorTitle>{elem.name}</ActorTitle>
            <ActorRole>Character: {elem.character}</ActorRole>
          </ActorCard>
        ))}
    </ActorCardContainer>
  );
};

CastCard.propTypes = {
  inCast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
      character: PropTypes.string,
    })
  ),
};
