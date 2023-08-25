import { SET_CONTACT_SALES, SET_RESTAURANT_DATA } from '../actions/types';

const initialState = {
    restaurant: null,
    contact_sales: null
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_SALES:
            return { ...state, contact_sales: action.payload };
        case SET_RESTAURANT_DATA:
            return { ...state, restaurant: action.payload };
        default:
            return state;
    }
};

export default app;
