import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from 'components/FilmList/FilmList';
import { getFilms } from 'services/API';
import { Button } from 'components/Button/Button.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const stringQuery = searchParams.get('query');
    if (stringQuery) {
      getFilms(stringQuery)
        .then(data => {
          setMovies(data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setMovies(null);
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  function onSearch(evt) {
    evt.preventDefault();
    // console.log(evt.currentTarget.elements.search.value);
    setSearchParams({
      query: evt.currentTarget.elements.search.value,
    });
    evt.currentTarget.reset();
  }

  return (
    <form onSubmit={onSearch}>
      <label>
        <input name="search" type="text" />
      </label>
      <Button type="submit">Search</Button>
      {movies?.length > 0 && (
        <>
          <FilmList list={movies} />
        </>
      )}
    </form>
  );
};

export default Movies;
