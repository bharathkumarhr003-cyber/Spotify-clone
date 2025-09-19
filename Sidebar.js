import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setView, user, setShowModal }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Spotify Clone</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#" onClick={() => setView('home')}>Home</a></li>
        <li><a href="#" onClick={() => setView('search')}>Search</a></li>
        <li><a href="#" onClick={() => setView('library')}>Your Library</a></li>
      </ul>
      <div className="playlists">
        <h3>Playlists</h3>
        <ul>
          <li><a href="#">My Playlist #1</a></li>
          <li><a href="#">My Playlist #2</a></li>
          <li><a href="#">My Playlist #3</a></li>
        </ul>
      </div>
      <div className="user-profile">
        {user ? (
          <p>Welcome, {user.username}</p>
        ) : (
          <button onClick={() => setShowModal(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
