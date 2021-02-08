import axios from 'axios';

export default axios.create({
  baseURL: 'https://jokes-api.herokuapp.com/api',
  headers: { 'Content-type': 'apllication/json' }
});
