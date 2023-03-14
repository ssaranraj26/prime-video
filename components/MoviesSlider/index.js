import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {movieList} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" style={{padding: '2rem'}}>
      <Slider {...settings}>
        {movieList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieItem={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
