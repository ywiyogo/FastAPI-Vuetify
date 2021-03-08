import Client from './Clients/AxiosClient';

const resource = '/raja_ongkir';
const apiKey = process.env.VUE_APP_RAJA_ONGKIR_API_KEY;

Client.defaults.headers.common['key'] = apiKey;

export default {
  getProvince(payload) {
    return Client.get(`${resource}/province`, payload);
  },
  getCity(payload) {
    return Client.get(`${resource}/city`, payload);
  },
  getSubdistrict(payload) {
    return Client.get(`${resource}/subdistrict`, payload);
  },
  getCost(payload, config) {
    return Client.post(`${resource}/cost`, payload, config);
  },
};