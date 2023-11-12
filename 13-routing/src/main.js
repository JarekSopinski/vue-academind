import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';

const router = createRouter({
    history: createWebHistory(), // use built-in browser support to handle history
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList }
    ],
    linkActiveClass: 'active' // optional, will default to 'router-link-active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
