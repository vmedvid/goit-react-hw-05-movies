import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'services/API';
import { FilmList } from 'components/FilmList/FilmList';

function Home() {
  const [trendingFilm, setTrendingFilm] = useState(null);

  useEffect(() => {
    getTrendingFilms()
      .then(data => {
        // console.log('data', data);
        setTrendingFilm(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <FilmList list={trendingFilm} />
    </main>
  );
}

export default Home;
