import apiFactory from '../../utils/apiFactory';
import { API_CONTACT_SALES, API_RESTAURANTS } from '../../constants/apiConfig';
import { SET_CONTACT_SALES, SET_RESTAURANT_DATA } from './types';

export const setContactSales = (payload) => ({ type: SET_CONTACT_SALES, payload })
export const setRestaurantData = (payload) => ({ type: SET_RESTAURANT_DATA, payload })

export const create = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_CONTACT_SALES, method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const verifyLink = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_CONTACT_SALES, path: (API_CONTACT_SALES.path + '/verify-register-link'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const registerRestaurant = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/register'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const resendEmailVerify = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/resend-verify-email'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const verifyEmail = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/verify-email'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const getRegisterConfig = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/register-config'), method: 'get' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const getPaymentConfig = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/payment-config'), method: 'get' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const getPaymentMethods = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/payment-methods'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const addCard = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/add-card'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const payWithCard = (payload) => {
    return new Promise(async (resolve, reject) => {
        apiFactory({ ...API_RESTAURANTS, path: (API_RESTAURANTS.path + '/pay-with-card'), method: 'post' }, payload)
            .then(async (data) => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
};