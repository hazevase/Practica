import React, { useState } from 'react';
import axios from 'axios';
import getSpotifyToken from '../../../utils/getSpotifyToken';
import './pop.css'

const GenreTracks = () => {
    const [genre, setGenre] = useState('pop'); // Начальное значение жанра "рок"
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTracksByGenre = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = await getSpotifyToken();
            const response = await axios.get('https://api.spotify.com/v1/recommendations', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    seed_genres: genre,
                    limit: 6 // Ограничение на количество возвращаемых треков
                }
            });
            setTracks(response.data.tracks);
        } catch (error) {
            setError('Error fetching tracks by genre from Spotify API');
            console.error('Error fetching tracks by genre from Spotify API', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className='content'>
            <div className="container">
                <br />
                <div className='track-section'>
                    <form className='track-form' onSubmit={fetchTracksByGenre}>
                        <button className='track-form__btn' type="submit">Обновить</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <br />
                    <div className='track-content'>
                        {tracks.length > 0 ? (
                            <ul className='track-wrap'>
                                {tracks.map((track) => (
                                    <li className='track-collection' key={track.id}>
                                        <img className='track-img' src={track.album.images[0]?.url} alt={track.name} />
                                        <p className='track-info'>{track.name} by {track.artists[0].name}</p>
                                        <audio className='track-player' controls>
                                            <source src={track.preview_url} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No tracks found</p>
                        )}
                    </div>
                </div>
            </div>
            <br />
            <br />
        </main>

    );
};

export default GenreTracks;