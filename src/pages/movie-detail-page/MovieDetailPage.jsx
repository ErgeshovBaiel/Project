import img from '../../assets/image 9.png'
import Button from '../../components/UI/Button/Button'
import PlayIcon from '../../assets/play.svg'
import FavIcon from '../../assets/fav.svg'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import movieService from '../../service/movieServie'

const MovieDetailPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    movieService.fetchMovieById(movieId).then(data => {
      console.log(data)
      setMovie(data)
    })
  }, [])

  if (Object.keys(movie).length === 0) {
    return (
      <div className='flex justify-center'>
        <h1>Loading...</h1>
      </div>
    )
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  const formatBudget = budget => {
    if (budget >= 1000000) {
      return (
        <>
          {(budget / 1000000).toFixed(0)}
          <span className='text-sm'>M</span>
        </>
      )
    }
    return budget
  }

  const countryNames = {
    US: 'USA',
    CA: 'Canada',
    GB: 'United Kingdom',
    FR: 'France',
    DE: 'Germany',
    IT: 'Italy'
  }

  const formatCountry = countryCode => {
    return countryNames[countryCode] || countryCode
  }

  let imgUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <div
      className='bg-cover  bg-center bg-no-repeat bg-gradient-to-b from-black to-[#131416]'
      style={{
        backgroundImage: `url(${imgUrl + movie.backdrop_path})`
      }}
    >
      <div className='w-[993px] mx-auto pt-[165px] pb-[105px] flex justify-between items-center'>
        <div>
          <img
            className='w-[300px] h-[450px] rounded-[20px]'
            src={imgUrl + movie.poster_path}
            alt=''
          />
        </div>
        <div className='movie-content w-[630px] text-white mt-[70px]'>

          <h3 className="text-5xl font-medium font-[Montserrat] my-8 mt-[-80px]">{movie.title}</h3>

          <div className="flex gap-5 w-[890px] text-xl font-medium font-[Montserrat] my-5">

            <span>{movie.release_date}</span>
            <p>{formatBudget(movie.budget)}</p>
            <p>{formatCountry(movie.origin_country)}</p>

            <p className="flex gap-5">
              {movie.genres.map((genre, index) => (
                <span key={index}>
                  {genre.name}
                  {index < movie.genres.length - 1 && ', '}{' '}
                </span>
              ))}
            </p>

          </div>

          <p className="text-base font-medium font-[Montserrat] my-5">{truncateText(movie.overview, 170)}</p>

          <div className='flex gap-8 mt-[100px]'>
            <Button className={'py-[14px] px-[20px]'}>
              <span className='flex items-center gap-[10px]'>
                <span>Смотреть по подписке</span>
                <img src={PlayIcon} alt='' />
              </span>
            </Button>
            <Button className={'py-[14px] px-[20px]'}>
              <span className='flex items-center gap-[10px]'>
                <span>В избранное</span>
                <img src={FavIcon} alt='' />
              </span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage
