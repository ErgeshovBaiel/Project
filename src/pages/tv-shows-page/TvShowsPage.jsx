import React from 'react'
import Search from '../../components/search/Search'
import MovieFilter from '../../components/movie-filter/MovieFilter'
import TvShows from '../../components/tvshows/TvShows'

const TvShowsPage = () => {
  return (
    <div>
      <TvShows />
      <Search />
      <MovieFilter />
    </div>
  )
}

export default TvShowsPage
