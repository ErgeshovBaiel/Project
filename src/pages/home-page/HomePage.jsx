import CategorySection from '../../components/category/CategorySection'
import HeroSection from '../../components/hero/HeroSection'
import Search from '../../components/search/Search'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Search />
      <CategorySection/>
    </div>
  )
}

export default HomePage
