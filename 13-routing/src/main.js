import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './components/nav/NotFound';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
    history: createWebHistory(), // use built-in browser support to handle history
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                // in child routes we don't have to repeat parent path, we only add nested segments
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },  // setting props:true tells router that dynamic params (teamId) should be passed as props
            ]
        },
        { path: '/users', components: { default: UsersList, footer: UsersFooter } },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active', // optional, will default to 'router-link-active'
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            // Upon returning, go back to previous scroll postition
            return savedPosition;
        }
        // Upon going forward to new route, scroll to the top
        return { left: 0, top: 0 };       
    }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
