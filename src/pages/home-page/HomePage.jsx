import { useState } from 'react'
import MaileHereko from '../../components/mailehereko/MaileHereko'
import MovieFilter from '../../components/movie-filter/MovieFilter'
import Search from '../../components/search/Search'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div>
      <MaileHereko />
      <Search onSearch={handleSearch} />
      <MovieFilter searchQuery={searchQuery} />
    </div>
  )
}

export default HomePage