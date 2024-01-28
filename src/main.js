import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import './assets/style/tailwind.css';
// import.meta.env.VITE_GIPHY_API_KEY;
// Load environment variables from .env file
// require('dotenv').config();

const app = createApp(App);

// Configure Axios with Giphy API base URL and API key
axios.defaults.baseURL = 'https://api.giphy.com/v1';
axios.defaults.params = {
    api_key: 'WzbKB2NxPaW4pcErMfWEHjvScdfPk7ze',
    limit: 25,
    offset: 0,
    rating: 'pg',
    bundle: 'messaging_non_clips',
};

// Make Axios accessible within Vue components
app.config.globalProperties.$axios = axios;

app.mount('#app');
