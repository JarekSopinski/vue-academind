export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return Boolean(state.token);
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
}