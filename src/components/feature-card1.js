import React from 'react';
import PropTypes from 'prop-types';
import './feature-card1.css';
import { useHistory } from 'react-router-dom';

const FeatureCard1 = (props) => {
  const history = useHistory(); 

  const handleCardClick = (track_id) => {
    // Redirect to song-details.js with the id of the clicked song
    history.push(`/song-details?track_id=${track_id}`);
    // console.log("Click Success")
  };

  return (
    <div className={`feature-card1-feature-card ${props.rootClassName}`} onClick={()=> handleCardClick(props.track_id)}>
      <h2 className="feature-card1-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card1-image"
      />
      <p className="feature-card1-artist">{props.artist}</p>
    </div>
  );
};

FeatureCard1.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum',
  rootClassName: '',
  imageAlt: 'image',
  artist: 'Unknown Artist',
  track_id: '' // Default value for the artist name
};

FeatureCard1.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  artist: PropTypes.string,
  track_id:PropTypes.string // PropType for the artist name
};

export default FeatureCard1;
