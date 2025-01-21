import React, { useEffect, useState } from 'react'
import movieService from '../../service/movieServie'
import Spinner from '../spinner/Spinner'

const CategorySection = () => {
  const [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    movieService
      .fetchMovieGenreList()
      .then(({ genres }) => {
        setCategory(genres)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div  className="bg-[#131416] text-white pb-[150px]">
    <div className='app-container'>
      <h3 className="font-[Montserrat] font-medium text-[24px] mb-[15px]">Смотрите фильмы, которые вам нравятся</h3>
      <p className=" w-[421px] h-[52px] font-[Montserrat] font-normal text-[#979797] text-[16px]">
        На нашем сайте собрано огромное количество фильмов и сериалов на любой
        вкус
      </p>

      <div className="flex gap-[120px] mt-[60px]">

      <div className="w-[310px] h-[170px] rounded-[20px] bg-[#1A1A1A]">
        <div className="pl-[94px] pt-[54px]">
        <p className="w-[76px] h-[24px] font-[Montserrat] font-medium text-[20px] mb-[10px]">Драма</p>
        <p className="w-[130px] h-[20px] font-[Montserrat] font-normal text-[16px] text-[#EF4234]">120k+ фильмов</p>
        </div>
      </div>
      <div className="w-[310px] h-[170px] rounded-[20px] bg-[#1A1A1A]">
        <div className="pl-[94px] pt-[54px]">
        <p className="w-[76px] h-[24px] font-[Montserrat] font-medium text-[20px] mb-[10px]">Ужасы</p>
        <p className="w-[130px] h-[20px] font-[Montserrat] font-normal text-[16px] text-[#EF4234]">100k+ фильмов</p>
        </div>
      </div>
      <div className="w-[310px] h-[170px] rounded-[20px] bg-[#1A1A1A]">
        <div className="pl-[94px] pt-[54px]">
        <p className="w-[76px] h-[24px] font-[Montserrat] font-medium text-[20px] mb-[10px]">Детективы</p>
        <p className="w-[130px] h-[20px] font-[Montserrat] font-normal text-[16px] text-[#EF4234]">90k+ фильмов</p>
        </div>
      </div>

      </div>
      
    </div>
    </div>
  )
}

export default CategorySection
