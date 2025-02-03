import React from 'react'
import Search from '../../components/search/Search'
import MovieFilter from '../../components/movie-filter/MovieFilter'
import Movies from '../../components/movies/Movies'

const MoviesPage = () => {
  return (
    <div>
      <Movies />
      <Search />
      <MovieFilter />
    </div>
  )
}

export default MoviesPage
