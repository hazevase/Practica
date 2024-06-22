import axios from 'axios';

const getSpotifyToken = async () => {
    const clientId = 'bd6a3c4980074ac79542358a358037b7';
    const clientSecret = 'a60320e5081a4d45b49a34408063d8c8';

    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
    };

    try {
        const response = await axios.post(tokenUrl, params, { headers });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Spotify token', error);
    }
};

export default getSpotifyToken;