import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_API_AUTHAPI
});