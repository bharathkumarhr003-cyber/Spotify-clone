CREATE DATABASE IF NOT EXISTS spotify_clone;
USE spotify_clone;

CREATE TABLE IF NOT EXISTS songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  artist VARCHAR(200),
  url VARCHAR(500) NOT NULL,
  duration VARCHAR(50) DEFAULT '0:00'
);

-- Sample data (adjust URLs to your local public songs folder or external links)
INSERT INTO songs (title, artist, url, duration) VALUES
('Sample Song 1', 'Artist A', '/songs/song1.mp3', '3:15'),
('Sample Song 2', 'Artist B', '/songs/song2.mp3', '2:45'),
('Sample Song 3', 'Artist C', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', '5:01');
