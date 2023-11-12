import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';

const router = createRouter({
    history: createWebHistory(), // use built-in browser support to handle history
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        // setting props:true tells router that dynamic params (teamId) should be passed as props
        { path: '/teams/:teamId', component: TeamMembers, props: true }
    ],
    linkActiveClass: 'active' // optional, will default to 'router-link-active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
