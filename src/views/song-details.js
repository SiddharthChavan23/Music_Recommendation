import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './song-details.css'

const SongDetails = (props) => {
  return (
    <div className="song-details-container">
      <Helmet>
        <title>SongDetails - Jovial Genuine Nightingale</title>
        <meta
          property="og:title"
          content="SongDetails - Jovial Genuine Nightingale"
        />
      </Helmet>
      <div className="song-details-hero">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className="song-details-image"
        />
        <div className="song-details-features">
          <h1 className="song-details-text">Meta-Data of Song</h1>
          <div className="song-details-container1">
            <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
          </div>
        </div>
        <span className="song-details-text1">Songs you may like</span>
        <div className="song-details-container2">
          <div className="song-details-feature-card">
            <h2 className="song-details-text2">Lorem ipsum</h2>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=1000"
              className="song-details-image1"
            />
          </div>
          <div className="song-details-feature-card1">
            <h2 className="song-details-text3">Lorem ipsum</h2>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=1000"
              className="song-details-image2"
            />
          </div>
          <div className="song-details-feature-card2">
            <h2 className="song-details-text4">Lorem ipsum</h2>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=1000"
              className="song-details-image3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongDetails
