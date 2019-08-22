import axios from 'axios';
<<<<<<< HEAD
import * as localEnv from './.env.js';

const instance = axios.create({
    baseURL: localEnv.firebaseDB
=======

const instance = axios.create({
    baseURL: 'https://hamburgers-5924f.firebaseio.com/'
>>>>>>> aa35dbb6f2317d919144be1ff3105969f83632c1
});

export default instance;