import Client from './Clients/AxiosClient';
const resource = '/variants';

export default {
    get(payload) {
        let { query } = payload;
        return Client.get(`${resource}${query ? query : ''}`, payload);
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