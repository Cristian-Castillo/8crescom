import axios from 'axios';

/* Request to store data in firebase data base 
Copy and paste your firebase

set rules... tab: copy and paste this into rules -


{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

*/

/* Copy & paste firebase realtime data base link here */
const instance = axios.create({
    baseURL: 'https://cres8-16430.firebaseio.com/'
});

export default instance;