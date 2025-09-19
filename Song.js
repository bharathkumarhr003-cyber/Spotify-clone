const db = require('../config/db');

const Song = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM songs ORDER BY id ASC');
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query('SELECT * FROM songs WHERE id = ?', [id]);
    return rows[0];
  },

  async create(song) {
    const { title, artist, url, duration } = song;
    const [result] = await db.query(
      'INSERT INTO songs (title, artist, url, duration) VALUES (?, ?, ?, ?)',
      [title, artist, url, duration || '0:00']
    );
    return { id: result.insertId, ...song };
  },

  async update(id, song) {
    const { title, artist, url, duration } = song;
    await db.query(
      'UPDATE songs SET title = ?, artist = ?, url = ?, duration = ? WHERE id = ?',
      [title, artist, url, duration, id]
    );
    return { id, ...song };
  },

  async delete(id) {
    await db.query('DELETE FROM songs WHERE id = ?', [id]);
    return true;
  }
};

module.exports = Song;
