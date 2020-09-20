import axios from '../../axiosMenu';
const { FETCH_MENU_SUCCESS, FETCH_MENU_REQUEST, FETCH_MENU_FAILURE, ADD_TO_CART, REMOVE_FROM_CART, SET_MODAL, CLEAR } = require("../actionsTypes");

export const addToCart = id => {
    return { type: ADD_TO_CART, id };
}

export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id };
}

export const setModal = modal => {
    return { type: SET_MODAL, modal };
}

const fetchMenuSuccess = menu => {
    return { type: FETCH_MENU_SUCCESS, menu }
}

const fetchMenuRequest = () => {
    return { type: FETCH_MENU_REQUEST }
}

const fetchMenuFailure = error => {
    return { type: FETCH_MENU_FAILURE, error }
}

export const clear = () => {
    return { type: CLEAR };
}


export const fetchMenuData = () => {
    return async dispatch => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axios.get('/menu.json');
            const fetchedMenu = Object.keys(response.data).map(id => {
                return { ...response.data[id], id };
            });
            dispatch(fetchMenuSuccess(fetchedMenu));
        } catch (e) {
            dispatch(fetchMenuFailure(e));
        }
    }
}