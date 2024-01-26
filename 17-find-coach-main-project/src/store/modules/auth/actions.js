import { FIREBASE_SIGNUP_ENDPOINT, FIREBASE_LOGIN_ENDPOINT } from "../../../settings";

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },

    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },

    async auth(context, payload) {
        const mode = payload.mode;

        let url = FIREBASE_LOGIN_ENDPOINT;
        if (mode === 'signup') {
            url = FIREBASE_SIGNUP_ENDPOINT;
        }

        const response = await fetch(`${url}?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate.');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },

    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        });
    }
};