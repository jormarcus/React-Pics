import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 839aa3cb5ddce0f5365ac4e829106b152a0f9f78ba0e4dedd5814357a1bb47e6'
  }
});