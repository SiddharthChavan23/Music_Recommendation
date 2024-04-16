import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory,link } from 'react-router-dom'; // Import useHistory from react-router-dom
import NavigationLinks from '../components/navigation-links';
import axios from 'axios'; // Import axios for making HTTP requests
import FeatureCard1 from '../components/feature-card1'
import './recommendation.css'

const Recommendation = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const history = useHistory(); 
    const idx = new URLSearchParams(location.search).get('idx'); // Retrieve idx from query parameter



    useEffect(() => {
      async function fetchRecommendations() {
          try {
              const response = await axios.get('http://127.0.0.1:5000/recommendations', {
                  params: {
                      idx:  idx, // Replace with your actual index value
                      nor: 8 // Number of recommendations you want
                  }
              });
              setRecommendations(response.data.recommendations);
          } catch (error) {
              console.error('Error fetching recommendations:', error);
          }
      }
      fetchRecommendations();
  }, []);
  console.log(recommendations)

  return (
    <div className="recommendation-container">
      <Helmet>
        <title>Recommendation</title>
        <meta
          property="og:title"
          content="Recommendation - Jovial Genuine Nightingale"
        />
      </Helmet>
      <div className="recommendation-features">
        <h1 className="recommendation-text">Recommended Songs</h1>
        <div className="recommendation-container1">
          {recommendations.map((result, index) => (
                  <FeatureCard1 key={index} artist={result.artists} imageSrc={result.image_url} title={result.track_name} 
                   track_id={result.track_id}></FeatureCard1>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Recommendation
