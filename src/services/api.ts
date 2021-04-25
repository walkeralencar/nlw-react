import axios from 'axios';

export const api = axios.create ({
  baseURL: 'http://local.test:3333/'
})