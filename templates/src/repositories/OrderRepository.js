import Client from './Clients/AxiosClient';
const resource = '/orders';

export default {
    get(payload) {
        return Client.get(`${resource}`, payload);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
};