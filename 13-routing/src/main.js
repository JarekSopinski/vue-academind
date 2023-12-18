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
            meta: { needsAuth: true }, // custom key-values, can be accessed anywhere where route object is available
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                // in child routes we don't have to repeat parent path, we only add nested segments
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },  // setting props:true tells router that dynamic params (teamId) should be passed as props
            ]
        },
        {
            path: '/users', 
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                // navigation guard specific to this route
                console.log('users beforeEnter');
                next();
            } 
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active', // optional, will default to 'router-link-active'
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            // Upon returning, go back to previous scroll postition
            return savedPosition;
        }
        // Upon going forward to new route, scroll to the top
        return { left: 0, top: 0 };       
    }
});

// navigation guard
router.beforeEach((to, from, next) => {
    // next(false) cancels navigation, next(true) or next() confirms it
    // next() also accept a route or navigation object to redirect to - i.e. next('/users');
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
    }
    console.log('Global before each');
    console.log(to, from);
    next();
});

// runs after navigation is confirmed
router.afterEach((to, from) => {
    // maybe send analytics data to save navigation action?
    console.log('Global after each', to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
