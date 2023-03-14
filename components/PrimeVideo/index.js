import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  const renderMovies = () => (
    <>
      <div className="moviesContainer">
        <h1 className="movies-genre">Action Movies</h1>
        <MoviesSlider movieList={actionMovies} />
      </div>
      <div className="moviesContainer">
        <h1 className="movies-genre">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovies} />
      </div>
    </>
  )

  return (
    <div className="prime-video-bg-container">
      <img
        className="prime-video-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="responsive-container">{renderMovies()}</div>
    </div>
  )
}

export default PrimeVideo
