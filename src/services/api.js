import axios from 'axios';

export const key = '52af97b0d13049d0eef663e826770cc1'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;