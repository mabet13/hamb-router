import axios from 'axios';
import * as localEnv from './.env.js';

const instance = axios.create({
    baseURL: localEnv.firebaseDB
});

export default instance;