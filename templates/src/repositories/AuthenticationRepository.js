import Client from './Clients/AxiosClient';
const resource = '/users';

export default {
    login(payload) {
        return Client.post(`${resource}/login`, payload);
    },
    register(payload) {
        return Client.post(`${resource}/register`, payload);
    }

    // MANY OTHER ENDPOINT RELATED STUFFS
};