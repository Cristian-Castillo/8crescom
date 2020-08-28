import axios from 'axios';



/* Copy & paste firebase realtime data base link here */
const instance = axios.create({
    baseURL: 'https://cres8-16430.firebaseio.com/'
});

export default instance;
