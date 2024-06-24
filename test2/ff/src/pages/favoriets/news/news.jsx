import React, { useEffect, useState } from 'react';
import getSpotifyToken from '../../../utils/getSpotifyToken';
import './news.css';

const News = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchNewReleases = async () => {
            const token = await getSpotifyToken();

            const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },

            });

            const data = await response.json();
            setTracks(data.albums.items);
        };

        fetchNewReleases();
    }, []);

    return (
        <div className="container">
            <div className="new-releas">
                    <h1 className='new-releas__title'>НОВИНКИ</h1>
                    <br />
                <ul className='new-releas__wrap'>
                    {tracks.map((track) => (
                        <li className='new-releas__track' key={track.id}>
                            <img width="350px" className='new-releas__track-photo' src={track.images[0].url} alt={track.name}  />
                            <p className='new-releas__track-title'>{track.name}</p>
                            <p className='new-releas__track-subtitle'>{track.artists.map(artist => artist.name).join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default News;