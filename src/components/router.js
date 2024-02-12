// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import TrendingGifs from './components/TrendingGifs.vue';
import SearchGifs from './components/SearchGifs.vue';
// import GifDetails from './components/GifDetails.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: TrendingGifs },
    { path: '/search', component: SearchGifs },
    // { path: '/details/:id', component: GifDetails, props: true },
];

const router = new VueRouter({
    routes,
});

export default router;
