import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(), // use built-in browser support to handle history
    routes: []
});

const app = createApp(App)

app.mount('#app');
