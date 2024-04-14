import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import NavigationLinks from '../components/navigation-links';
import axios from 'axios'; // Import axios for making HTTP requests
import './home.css';

/**
 * Home component for the Music Recommendation System.
 * Allows users to search for songs and displays search results.
 */
const Home = () => {
  // State variables
  const [searchInput, setSearchInput] = useState(''); // Input for search query
  const [searchResults, setSearchResults] = useState([]); // Results of search
  const history = useHistory(); // Initialize useHistory hook for navigation

  /**
   * Handles input change in the search input field.
   * @param {Event} event - The input change event
   */
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  /**
   * Handles search action by sending a request to the server.
   */
  const handleSearch = () => {
    axios.get('http://127.0.0.1:5000/search', { params: { title: searchInput } })
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error searching:', error);
      });
  };

  /**
   * Handles click on a search result item.
   * Redirects to recommendation page with selected item's position as a query parameter.
   * @param {number} position - Position of the clicked item in the search results
   */
  const handleClick = (position) => {
    history.push(`/recommendations?idx=${position}`);
  };

  return (
    <>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Music Recommendation System</title>
        <meta property="og:title" content="Jovial Genuine Nightingale" />
      </Helmet>
      {/* Header */}
      <header className="home-header">
        {/* Header content */}
      </header>
      {/* Main content */}
      <div className="home-hero">
        {/* Search input and button */}
        <div className='search-content'>
          <label htmlFor="songInput">Input Song</label>
          <input
            id="songInput"
            type="text"
            placeholder="Input Song"
            className="home-input input"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch} className="home-button button">Search</button>
        </div>
        {/* Display search results */}
        <div className="home-container1">
          {/* Map over search results, slice array to ensure only 4 cards per row */}
          {searchResults.map((result, index) => (
            index % 4 === 0 && index !== 0 ?
              <div key={index} className="home-row">
                {searchResults.slice(index - 4, index).map((item) => (
                  <div key={item.position} className="home-card" onClick={() => handleClick(item.position)}>
                    <img src={item.image_url} alt={item.track_name} />
                    <p>{item.track_name}</p>
                    <p>{item.artists}</p>
                  </div>
                ))}
              </div>
              : null
          ))}
        </div>
        <div className="home-btn-group"></div>
      </div>
    </>
  );
};

export default Home;
