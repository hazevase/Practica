import './searchalbum.css'
import React, { useState } from 'react';
import axios from 'axios';
import getSpotifyToken from '../../utils/getSpotifyToken';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = await getSpotifyToken();
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchTerm,
                    type: 'album'
                }
            });
            setAlbums(response.data.albums.items);
        } catch (error) {
            setError('Error fetching albums from Spotify API');
            console.error('Error fetching albums from Spotify API', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className='content'>
            <div className='album-section'>
            <form className='album-form' onSubmit={handleSearch}>
                <input
                    className='album-search-input'
                    size={50}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Введите тему, исполнителя или название альбома"
                />
                {/* <button type="submit">Search</button> */}
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className='album-collection'>
                {albums.length > 0 ? (
                    <ul className='album-wrap'>
                        {albums.map((album) => (
                            <li className='album-content' key={album.id}>
                                <img className='album-img' src={album.images[0]?.url} alt={album.name} />
                                <p className='album-info'>{album.name} by {album.artists[0].name}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No albums found</p>
                )}
            </div>
        </div>
        </main>
    );
};

export default AlbumList