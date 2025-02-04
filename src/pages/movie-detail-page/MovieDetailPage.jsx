import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import movieService from '../../service/movieServie';

const MovieDetailPage = () => {
  const { t, i18n } = useTranslation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieService.fetchMovieById(movieId, i18n.language).then((data) => {
      console.log(data);
      setMovie(data);
    });
  }, [movieId, i18n.language]);

  if (Object.keys(movie).length === 0) {
    return (
      <div className="flex justify-center">
        <h1 className="text-white">{t('Loading...')}</h1>
      </div>
    );
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const formatBudget = (budget) => {
    if (budget >= 1000000) {
      return (
        <>
          {(budget / 1000000).toFixed(0)}
          <span className="text-sm">M</span>
        </>
      );
    }
    return budget;
  };

  const countryNames = {
    US: t('USA'),
    CA: t('Canada'),
    GB: t('United Kingdom'),
    FR: t('France'),
    DE: t('Germany'),
    IT: t('Italy'),
  };

  const formatCountry = (countryCode) => {
    return countryNames[countryCode] || countryCode;
  };

  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center bg-no-repeat w-[1440px] h-[480px] mt-[120px] rounded-[40px] m-auto"
          style={{
            backgroundImage: `linear-gradient(to top right, rgba(54, 44, 146, 0.4), rgba(18, 98, 151, 0.4)), url(${
              imgUrl + movie.backdrop_path
            })`,
          }}
        ></div>

        <div className=" w-[993px] mx-auto pt-[165px] pb-[105px] flex justify-between items-center">
          <div className='mr-[30px]'>
            <img
              className="rounded-[24px] "
              src={imgUrl + movie.poster_path}
              alt={movie.title}
            />
          </div>

          <div className="movie-content w-[630px] text-white mt-[70px]">
            <h3 className=" text-5xl font-medium font-[Montserrat] my-8 mt-[-80px]">
              {movie.title}
            </h3>

            <div className="mr-[80px] flex gap-5 w-[300px] text-xl font-medium font-[Montserrat] my-5">
              <span className=''>{movie.release_date}</span>
              <p className=''>{formatBudget(movie.budget)}</p>
              <p className=''>{formatCountry(movie.origin_country)}</p>
            
              

              <p className="flex gap-5">
                {movie.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}
                    {index < movie.genres.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>

            <p className="text-base font-medium font-[Montserrat] my-5">
              {truncateText(movie.overview, 170)}
            </p>

            <div className="flex gap-8 mt-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;