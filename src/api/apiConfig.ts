import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.meaningcloud.com/',
});

export const apiToken = axios.create({
  baseURL: 'https://65382ae3a543859d1bb14acf.mockapi.io/',
});
