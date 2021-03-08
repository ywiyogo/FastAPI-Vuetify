import Client from './Clients/AxiosClient';
const resource = '/customers';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getCustomer(id) {
        return Client.get(`${resource}/${id}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    update(payload) {
        // console.log(payload);
        
        return Client.put(`${resource}/${payload.id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },

    // MANY OTHER ENDPOINT RELATED STUFFS
};