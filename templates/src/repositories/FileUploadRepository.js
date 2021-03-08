import Client from './Clients/AxiosClient';
const resource = '/files';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    uploadMultiple(payload) {
        return Client.post(`${resource}/uploadmultiple`, payload);
    },
    // MANY OTHER ENDPOINT RELATED STUFFS
};