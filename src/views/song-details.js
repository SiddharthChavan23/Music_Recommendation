import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './song-details.css';

const SongDetails = () => {
  const [songdata, setSongData] = useState({});
  const location = useLocation();
  const idx = "51R5mPcJjOnfv9lKY1u5sW";
  const msToTime = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/track/${idx}`);
        setSongData(response.data);
      } catch (error) {
        console.error('Error fetching song details:', error);
      }
    }
    if (idx) {
      fetchDetails();
    }
  }, [idx]);

  return (
    <div className="song-details-container">
      <Helmet>
        <title>{`SongDetails - ${songdata.track_name || "Unknown"}`}</title>
        <meta property="og:title" content={`SongDetails - ${songdata.track_name || "Unknown"}`} />
      </Helmet>
      <div className="song-details-hero">
        <img
          src={songdata.images && songdata.images.length > 0 ? songdata.images[0].url : ''}
          alt={songdata.track_name || ''}
          className="song-details-image"
        />
        <div className="song-details-features">
          <h1 className="song-details-text">Meta-Data of Song</h1>
          <div className="song-details-container1">
            <p><strong>Track Name:</strong> {songdata.track_name || 'N/A'}</p>
            <p><strong>Artists:</strong> {songdata.artists || 'N/A'}</p>
            <p><strong>Album:</strong> {songdata.album || 'N/A'}</p>
            <p><strong>Duration[Minutes]:</strong> {songdata.duration_ms ? msToTime(songdata.duration_ms) : 'N/A'}</p>
            <p><strong>Popularity:</strong> {songdata.popularity || 'N/A'}</p>
            <p><strong>Release Date:</strong> {songdata.release_date || 'N/A'}</p>
            <p><strong>Song Link:</strong> <a href={songdata.song_link || '#'}>{songdata.song_link || 'N/A'}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
