import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        testAuth(state, getters, rootState, rootGetters) {
            // how to get state and getters from different module
            console.log(rootState, rootGetters);
            return rootState.isLoggedIn;
        },
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            console.log(state);
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(function() {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule // 'numbers' is a namespace
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        // Opposing to mutations, actions can be async.
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
