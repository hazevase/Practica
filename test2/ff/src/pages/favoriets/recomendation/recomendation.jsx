import React, { useEffect, useState } from 'react';
import getSpotifyToken from '../../../utils/getSpotifyToken';
import './recomendation.css';

const Recom = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const token = await getSpotifyToken();


      const seed_artists = '4NHQUGzhtTLFvgF5SZesLK';
      const seed_genres = 'classical,country';
      const seed_tracks = '0c6xIDDpzE81m2q797ordA';

      const response = await fetch(
        `https://api.spotify.com/v1/recommendations?seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        }
      );

      const data = await response.json();
      setTracks(data.tracks);
    };

    fetchRecommendations();
  }, []);
  return (
    <div className="container">
      <div className="new-releas">
        <h1 className='new-releas__title'>Рекомендации</h1>
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

export default Recom;