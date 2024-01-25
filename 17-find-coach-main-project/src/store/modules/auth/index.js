import mutation from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutation,
    actions,
    getters
}