// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

//Google Custom Search JSON API
//free, limit 100 requests per day
//registered for me:
const Google_Custom_Search_JSON_API_KEY =
    'AIzaSyCA2egInVptcES-MB2MgC7LGeglFbm7M0A';
const Google_Custom_Search_JSON_Engine_ID = '8757e8c3566874ad9';
const Google_Custom_Search_JSON_API_URL = `https://www.googleapis.com/customsearch/v1?key=${Google_Custom_Search_JSON_API_KEY}&cx=${Google_Custom_Search_JSON_Engine_ID}`;

export { API_URL, Google_Custom_Search_JSON_API_URL };
