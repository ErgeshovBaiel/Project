import { useState, useEffect, useContext } from 'react'
import movieService from '../../service/movieServie'
import Spinner from '../spinner/Spinner'
import { GENRES_CONTEXT } from '../../components/context/GenreContext'
import Button from '../UI/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'

const UpComing = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const { genres } = useContext(GENRES_CONTEXT)

  useEffect(() => {
    setLoading(true)
    movieService
      .fetchMovieUpComing()
      .then(res => setMovie(res.results))
      .catch(err => console.error('Error fetching movies:', err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner />
  }

  const imgUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="mt-[30px]">
      <div className="h-[500px] app-container relative">
        <div className="custom-pagination2 absolute  pr-[150px] bottom-[40px] z-10"></div>

        <Swiper
          direction={'vertical'}
          pagination={{
            el: '.custom-pagination2',
            clickable: true, 
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          className='mySwiper h-[500px]'
        >
          {movie.map(item => (
            <SwiperSlide key={item.id}>
              <div className="w-[880px] h-[560px] ml-[180px] bg-[#1a1a1a] text-white">
                <div className="flex">
                  <div className="ml-[-82px]">
                    <img
                      className="w-[300px] h-[400px] rounded-[10px] mt-[55px]"
                      src={imgUrl + item.poster_path}
                    />
                  </div>
                  <div className="w-[442px] h-[260px] ml-[95px] pt-[110px]">
                    <h2 className="font-[Montserrat] text-[36px] font-semibold mb-[15px]">
                      {item.title}
                      <span className="ml-[30px] text-[24px] font-medium">
                        {item.release_date.slice(0, 4)}
                      </span>
                    </h2>
                    <p className="flex gap-[20px] mb-[24px] font-[Montserrat] text-[16px]">
                      {genres
                        .filter(genre => item.genre_ids.includes(genre.id))
                        .map(g => (
                          <span className="text-[#EF4234]" key={g.id}>
                            {g.name}
                          </span>
                        ))}
                    </p>
                    <p className="line-clamp-3 text-[16px] mb-[30px]">
                      {item.overview}
                    </p>
                    <Button className="py-[5px] px-[20px] font-[Montserrat] text-[16px] font-medium">
                      Смотреть
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default UpComing
