import MaileHereko from '../../components/mailehereko/MaileHereko'
import MovieFilter from '../../components/movie-filter/MovieFilter'
import Search from '../../components/search/Search'

const HomePage = () => {
  return (
    <div>
      <MaileHereko />
      <Search />
      <MovieFilter />
    </div>
  )
}

export default HomePage
