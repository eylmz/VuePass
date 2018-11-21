import Axios from 'axios';

export default{
  config () {
    let config = { header: { }};
    if (localStorage.getItem('api_token') !== null) config.headers = { Authorization: 'Bearer ' + localStorage.getItem('api_token') };
    return config;
  },
  url (endpoint) {
    return 'http://localhost:8000/api/' + endpoint;
  },
  post (endpoint, data = {}) {
    return Axios.post(this.url(endpoint), data, this.config());
  },
  get (endpoint) {
    return Axios.get(this.url(endpoint), this.config());
  },
  delete (endpoint) {
    return Axios.delete(this.url(endpoint), this.config());
  },
  put (endpoint, data = {}) {
    return Axios.put(this.url(endpoint), data, this.config());
  },
};
