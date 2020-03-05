const axios = require('axios');
const APIURL = process.env.REACT_APP_PIXBAY_URL;
const APIKEY = process.env.REACT_APP_PIXBAY_KEY;

export const getPhotos = (page = 1) =>
  axios.get(`${APIURL}/?key=${APIKEY}&page=${page}`);
