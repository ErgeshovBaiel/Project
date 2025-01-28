import movieServie from '../../service/movieServie'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../spinner/Spinner'
import VideoCard from '../../components/video-card/VideoCard'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const VideoSection = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: () => movieServie.fetchMovieTrailers(id),
    select: data => data.results
  })

  if (isLoading) {
    return <Spinner />
  }

  console.log(data)

  return (
    <div className='app-container text-white pt-[120px]'>
      <h3  class="w-[131px] h-[29px] font-[Montserrat] text-[24px] font-semibold ml-[30px]">Трейлеры</h3>
      <div className='h-[350px]'>
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          {data.map((video, index) => {
            return (
              <SwiperSlide key={video.id || index}>
                <div className='flex gap-[30px] rounded-[20px]'>
                  <VideoCard key={video.id || index} videoKey={video.key} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default VideoSection
