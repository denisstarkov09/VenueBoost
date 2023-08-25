import axios from 'axios';
import store from '../redux/store';
import { isEmpty } from './common'
import { API_BOOST_CORE_URL, APP_KEY } from '../constants/config';

export default async (api, payload = {}, token, responseType) => {
    return new Promise(async (resolve, reject) => {
        try {
            const headers = { 'Content-Type': api.content_type };
            if (api.has_token == true && (token != null || store.getState().auth.stoken != null)) {
                headers['Authorization'] = 'Bearer ' + (token ?? store.getState().auth.stoken);
            }

            const url = `${API_BOOST_CORE_URL}${api.path}?SN-BOOST-CORE-WEB-API-KEY=${APP_KEY}` + (!isEmpty(api.query) ? ('&' + api.query) : '');
            console.log("REQUEST API : ", url, headers, payload);

            const response = await axios({
                url: url,
                method: api.method,
                data: payload,
                headers: headers,
                responseType: responseType
            });

            console.log("REQUEST API RESULT ", response.data);

            resolve(response.data);
        } catch (error) {
            console.log("REQUEST API ERROR ", error?.response?.data);
            reject(error?.response?.data);
        }
    });
};
