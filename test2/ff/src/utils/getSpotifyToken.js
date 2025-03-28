import axios from 'axios';

const getSpotifyToken = async () => {
    const clientId = 'ff177985143a48dcadc32b3ea95c7c7e';
    const clientSecret = 'fcad2be7ecf941ab9a473e4342295179';

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