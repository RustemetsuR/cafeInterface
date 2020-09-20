import { ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS, CHANGE_CONTACT_DATA, CLEAR_CONTACT_DATA } from "../actionsTypes";
import axios from '../../axiosMenu';

const orderRequest = () => {
    return { type: ORDER_REQUEST };
};

const orderFailure = error => {
    return { type: ORDER_FAILURE, error };
};
const orderSuccess = () => {
    return { type: ORDER_SUCCESS };
};

export const changeContactData = (name, value) => {
    return { type: CHANGE_CONTACT_DATA, name, value }
}

export const clearContactData = () => {
    return { type: CLEAR_CONTACT_DATA };
}

export const createOrder = (order) => {
    return async dispatch => {
        dispatch(orderRequest());
        try {
            const response = await axios.post("/orders.json", order);
            dispatch(orderSuccess(response.data));
        } catch (e) {
            dispatch(orderFailure(e));
        };
    };
};
