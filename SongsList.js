import React, { useEffect, useState } from 'react';
import axios from 'axios';

 

function SongsList({ setCurrentSong }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/songs')
      .then(res => setSongs(res.data))
      .catch(err => console.log(err));
  }, []);

  const playSong = (song) => setCurrentSong(song);

  return (
    <div>
      {songs.map(song => (
        <div className="song-card" key={song.id}>
          <img src={`/songs/${song.image}`} alt={song.name} className="album-art" />
          <div className="song-info">
            <p>{song.name}</p>
            <p>{song.artist}</p>
          </div>
          <button onClick={() => playSong(song)}>▶️</button>
        </div>
      ))}
    </div>
  );
}

export default SongsList;
