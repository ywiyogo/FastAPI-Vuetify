import Client from './Clients/AxiosClient';
const resource = '/products';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getCategory(id) {
        return Client.get(`${resource}/${id}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(payload) {
        return Client.post(`${resource}/delete`, payload)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
};