import axios from 'axios';

const KEY= 'AIzaSyBzA7FAReIJK9DZgesnj8fUKAb7q0KmTGg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

