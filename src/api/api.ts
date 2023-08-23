import axios from 'axios';

export const apiRQ = axios.create({
    baseURL: 'https://people.canonical.com',
    responseType: 'json',
});
