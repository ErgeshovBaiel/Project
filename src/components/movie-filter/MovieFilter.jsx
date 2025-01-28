import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules'
import movieService from '../../service/movieServie'
import { useNavigate } from 'react-router-dom'

const filterNames = [
  'Новинки',
  'Популярное',
  'Смотрят сейчас',
  'Рекомендации',
  'Топ 10',
  'Скоро на Cinemax'
]

const MovieFilter = () => {
  const navigate = useNavigate()
  const [activeBtn, setActiveBtn] = useState(null)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetchMovies('Новинки')
    setActiveBtn('Новинки')
  }, [])

  const fetchMovies = item => {
    setIsLoading(true)
    if (item === 'Новинки') {
      movieService.fetchNewMovie().then(res => {
        setMovies(res.results)
        setIsLoading(false)
      })
    } else if (item === 'Популярное') {
      movieService.fetchPopularMovies().then(res => {
        setMovies(res.results)
        setIsLoading(false)
      })
    } else if (item === 'Смотрят сейчас') {
      movieService.fetchMovieNowWatching().then(res => {
        setMovies(res.results)
        setIsLoading(false)
      })
    } else if (item === 'Топ 10') {
      movieService.fetchMovieTopRated().then(res => {
        setMovies(res.results)
        setIsLoading(false)
      })
    } else if (item === 'Скоро на Cinemax') {
      movieService.fetchMovieUpComing().then(res => {
        setMovies(res.results)
        setIsLoading(false)
      })
    }
  }

  const handleOnClick = item => {
    setActiveBtn(item)
    fetchMovies(item)
  }

  const formatVoteAverage = voteAverage => {
    return voteAverage.toFixed(1)
  }

  return (
    <div className='pb-[80px]'>
      <div className='app-container flex gap-[75px] items-center px-[75px] rounded-[10px] bg-[#1A1A1A] text-white'>
        {filterNames.map(item => {
          const activeClass = item === activeBtn ? 'border-b border-[red]' : ''
          return (
            <p
              onClick={() => handleOnClick(item)}
              className={`${activeClass} cursor-pointer py-[22px]`}
              key={item}
            >
              {item}
            </p>
          )
        })}
      </div>

      <div className='app-container pt-20 relative'>
        {isLoading ? (
          <h3 className='text-white'>Loading...</h3>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
            spaceBetween={40}
            slidesPerView={windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {movies.map(film => {
              const imgUrl = 'https://image.tmdb.org/t/p/original/'
              return (
                <SwiperSlide key={film.id}>
                  <div
                    onClick={() => {
                      navigate(`/movie-detail/${film.id}`)
                    }}
                    className='flex flex-col items-center justify-center '
                  >
                    <button className='absolute text-white mb-[372px] rounded-bl-[5px] mr-32 rounded-br-[5px] w-[35px] h-[35px] bg-[#EF4234]'>
                      {formatVoteAverage(film.vote_average)}
                    </button>

                    <img
                      className='rounded-[10px] cursor-pointer'
                      width='225'
                      height='300'
                      src={imgUrl + film.poster_path}
                      alt={film.title}
                    />
                    <h2 className='text-white mt-5 text-[17px] font-medium'>
                      {film.title}
                    </h2>
                    <h3 className='text-white'>
                      {film.release_date.slice(0, 4)}
                    </h3>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}

        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    </div>
  )
}

export default MovieFilter
