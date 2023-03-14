import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {videoUrl} = movieItem

  const renderVideoPlayer = () => (
    <div className="video-container">
      <ReactPlayer url={videoUrl} controls className="video-player" />
    </div>
  )

  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className="thumbnail-button" type="button">
            <img
              className="thumbnail"
              src={movieItem.thumbnailUrl}
              alt="thumbnail"
            />
          </button>
        }
        modal
      >
        {close => (
          <div className="modal-body">
            <button
              className="close-btn"
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            {renderVideoPlayer()}
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
