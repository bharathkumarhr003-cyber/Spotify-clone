import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

export const fetchSongs = async () => {
  const res = await axios.get(`${API_BASE}/songs`);
  return res.data;
};

export const fetchSongById = async (id) => {
  const res = await axios.get(`${API_BASE}/songs/${id}`);
  return res.data;
};
