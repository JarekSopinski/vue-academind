export default {
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
    }
}