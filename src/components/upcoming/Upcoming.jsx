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

  if (!movie.length) {
    return <div className='text-white'>No upcoming movies found.</div>
  }

  const imgUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="mt-[100px]">
      <div className='h-[500px] app-container relative'>
        <div className="custom-pagination absolute top-1/2 right-5 -translate-y-1/2 z-10"></div>

        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true,
            el: '.custom-pagination', 
            type: 'bullets'
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
              <div className='ml-[200px]'>
                <div className="w-[880px] h-[560px] bg-[#1A1A1A] text-white">
                  <div className='flex'>
                    <div className='ml-[-82px]'>
                      <img
                        className='w-[300px] h-[400px] rounded-[10px] mt-[55px]'
                        src={imgUrl + item.poster_path}
                        alt={item.title}
                      />
                    </div>
                    <div className='w-[500px] ml-[95px] pt-[110px]'>
                      <h2 className='font-[Montserrat] text-[36px] font-semibold mb-[15px]'>
                        {item.title}
                        <span className='ml-[30px] text-[24px] font-medium'>
                          {item.release_date.slice(0, 4)}
                        </span>
                      </h2>
                      <p className='flex gap-[20px] mb-[24px] font-[Montserrat] text-[16px]'>
                        {genres
                          .filter(genre => item.genre_ids.includes(genre.id))
                          .map(g => (
                            <span className='text-[#EF4234]' key={g.id}>
                              {g.name}
                            </span>
                          ))}
                      </p>
                      <p className='line-clamp-3 text-[16px] mb-[30px]'>
                        {item.overview}
                      </p>
                      <Button className='py-[5px] px-[20px] font-[Montserrat] text-[16px] font-medium'>
                        Смотреть
                      </Button>
                    </div>
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



// import { useState, useEffect, useContext } from "react"
// import movieService from "../../service/movieServie"
// import Spinner from "../spinner/Spinner"
// import { GENRES_CONTEXT } from "../../components/context/GenreContext"
// import Button from "../UI/Button/Button"

// const UpComing = () => {
//     const [movie, setMovie] = useState([])
//     const [loading, setLoading] = useState(true)
//     const { genres } = useContext(GENRES_CONTEXT)

//     useEffect(() => {
//         // setLoading(true)
//         movieService.fetchMovieUpComing()
//             .then(res => setMovie(res.results))
//             .finally(() => setLoading(false))
//     }, [])

//     if (loading) {
//         return <Spinner />
//     }
//     let imgUrl = 'https://image.tmdb.org/t/p/original/'
//     return (
//         <div>
//             <div className="app-container">
//                 <div className="w-[880px] h-[560px] rounded-[10px]
//                  bg-black text-white mt-[100px] ml-[188px] ">
//                     <div className="w-[300px] h-[450px] ">
//                         <img className="rounded-[10px]  pt-[55px]" src={imgUrl + movie[0].poster_path} alt="" />
//                     </div>
//                     <div className="w-[442px] ml-[350px] mt-[-200px]">
//                         <h2 >
//                             {movie[0].title}
//                             <span className="ml-[30px]">{movie[0].release_date.slice(0, 4)}</span>
//                         </h2>
//                         <p className="flex gap-[20px]">
//                             {genres.filter(item => movie[1].genre_ids.includes(item.id)).map(g => {
//                                 return <span className="text-[red]" key={g.id}>{g.name}</span>
//                             })
//                             }
//                         </p>
//                         <p className="line-clamp-3">
//                             {movie[0].overview}
//                         </p>
//                         <Button className={"py-[5px] px-[20px]"}>
//                             Смотреть
//                         </Button>
//                     </div>
//                     <div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UpComing
