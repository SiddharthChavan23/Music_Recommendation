import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import './recommendation.css'

const Recommendation = (props) => {
  return (
    <div className="recommendation-container">
      <Helmet>
        <title>Recommendation - Jovial Genuine Nightingale</title>
        <meta
          property="og:title"
          content="Recommendation - Jovial Genuine Nightingale"
        />
      </Helmet>
      <div className="recommendation-features">
        <h1 className="recommendation-text">Recommended Songs</h1>
        <div className="recommendation-container1">
          <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName4"></FeatureCard1>
        </div>
      </div>
    </div>
  )
}

export default Recommendation
