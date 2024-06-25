import React, { useEffect, useState } from 'react';
import getSpotifyToken from '../../../utils/getSpotifyToken';
import './news.css';
import axios from 'axios';

const News = () => {
    const [newTracks, setNewTracks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getSpotifyToken();

                const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setNewTracks(response.data.albums.items);
            } catch (error) {
                console.error('Error fetching new tracks:', error);
                setError('Error fetching new tracks');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="new-releas">
                <h1 className='new-releas__title'>НОВИНКИ</h1>
                <br />
                <ul className='new-releas__wrap'>
                    {newTracks.map((track) => (
                        <li className='new-releas__track' key={track.id}>
                            <img width="350px" className='new-releas__track-photo' src={track.images[0].url} alt={track.name} />
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