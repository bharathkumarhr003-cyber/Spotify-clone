import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = ({ setCurrentSong, view, searchTerm, setSearchTerm }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const apiTerm = searchTerm || 'pop';
    fetch(`https://itunes.apple.com/search?term=${apiTerm}&entity=song&limit=50`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
      })
      .catch((err) => console.error("Error fetching songs:", err));
  }, [searchTerm]);

  return (
    <div className="main-content">
      {view === 'search' && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <h2>{view === 'library' ? 'Your Library' : 'Songs'}</h2>
      <div className="song-grid">
        {songs.map((song) => (
          <div
            key={song.trackId}
            className="song-card"
            onClick={() => setCurrentSong(song)}
          >
            <img src={song.artworkUrl100} alt={song.trackName} />
            <div className="song-info">
              <h3>{song.trackName}</h3>
              <p>{song.artistName}</p>
            </div>
            <button className="play-button">▶️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
