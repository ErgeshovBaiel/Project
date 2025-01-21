import axios from '../axios'

class MovieService {
  async fetchAllMovies () {
    try {
      const { data, status } = await axios.get('discover/movie?language=ru')
      if (status !== 200) {
        throw new Error('Failed fetching movie data')
      }
      return data
    } catch (err) {
      console.log(err)
    }
  }

  async fetchMovieById (id) {
    try {
      const { data, status } = await axios.get(`/movie/${id}?language=ru`)
      if (status !== 200) {
        throw new Error('Failed fetching movie info')
      }
      return data
    } catch (err) {
      console.log(err)
    }
  }

  async fetchMovieGenreList () {
    try {
      const { data, status } = await axios.get('genre/movie/list?language=ru')
      if (status !== 200) {
        throw new Error('Failed fetching movie genre list')
      }
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

const movieService = new MovieService()
export default movieService
