import React, { useEffect, useState } from 'react';
import getSpotifyToken from '../../../utils/getSpotifyToken';
import './top.css';

const Top = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTopCharts = async () => {
      const token = await getSpotifyToken();

      // Получение плейлистов из категории "Top Lists"
      const categoryResponse = await fetch(
        'https://api.spotify.com/v1/browse/categories/toplists/playlists',
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        }
      );

      const categoryData = await categoryResponse.json();
      const playlistId = categoryData.playlists.items[0].id;

      // Получение треков из первого плейлиста
      const tracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        }
      );

      const tracksData = await tracksResponse.json();
      setTracks(tracksData.items.map(item => item.track));
    };

    fetchTopCharts();
  }, []);
  return (
    <div className="container">
      <div className="new-releas">
        <h1 className='new-releas__title'>Топ-чарты</h1>
        <br />
        <ul className='new-releas__wrap'>
          {tracks.map((track) => (
            <li className='new-releas__track' key={track.id}>
              <img width="350px" className='new-releas__track-photo' src={track.album.images[0].url} alt={track.name} />
              <p className='new-releas__track-title'>{track.name}</p>
              <p className='new-releas__track-subtitle'>{track.artists.map(artist => artist.name).join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Top;