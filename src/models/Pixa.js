import axios from 'axios';
import querystring from 'querystring';

const APIURL = process.env.REACT_APP_PIXBAY_URL;
const APIKEY = process.env.REACT_APP_PIXBAY_KEY;

class Pixa {
  static all(page) {
    return axios.get(`${APIURL}/?key=${APIKEY}&page=${page}`);
  }
  static searchPics(data) {
    try {
      const query = querystring.stringify(data);
      return axios.get(`${APIURL}/?key=${APIKEY}&${query}`);
    } catch (err) {
      console.log(err.response);
    }
  }
  static searchVideos(data) {
    try {
      const query = querystring.stringify(data);
      return axios.get(`${APIURL}/videos/?key=${APIKEY}&${query}`);
    } catch (err) {
      console.log(err.response);
    }
  }
}

export default Pixa;
