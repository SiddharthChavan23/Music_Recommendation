import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import NavigationLinks from '../components/navigation-links';
import axios from 'axios';
import './home.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true); // Set loading state to true when search begins
    axios.get('http://127.0.0.1:5000/search', { params: { title: searchInput } })
      .then(response => {
        const searchResults = response.data.results;
        if (searchResults.length > 0) {
          setSearchResults(searchResults);
        } else {
          setSearchResults([]);
          alert('Song not found in the dataset.');
        }
      })
      .catch(error => {
        console.error('Error searching:', error);
        alert('An error occurred while searching for the song.');
      })
      .finally(() => {
        setIsLoading(false); // Set loading state back to false when search is complete
      });
  };

  const handleClick = (position) => {
    history.push(`/recommendations?idx=${position}`);
  };

  return (
    <>
      <Helmet>
        <title>Music Recommendation System</title>
        <meta property="og:title" content="Jovial Genuine Nightingale" />
      </Helmet>
      <header className="home-header">
        {/* Header content */}
      </header>
      <div className="home-hero">
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
        {/* Conditional rendering based on isLoading state */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="home-container1">
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
        )}
      </div>
    </>
  );
};

export default Home;
