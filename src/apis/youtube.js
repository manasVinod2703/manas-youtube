import axios from "axios"

const KEY = 'AIzaSyB3f0QtIohkZNTm2zIrA5pWHOUR7QQeMWc'


export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
        
