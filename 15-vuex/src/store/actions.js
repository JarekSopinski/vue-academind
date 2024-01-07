export default {
    // Opposing to mutations, actions can be async.
    login(context) {
        context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
        context.commit('setAuth', { isAuth: false });
    },
}