import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { CastCard } from '../CastCard/CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(data => {
        // console.log('data in Cast', data);
        setCast(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return <>{cast && <CastCard inCast={cast} />}</>;
};

export default Cast;
