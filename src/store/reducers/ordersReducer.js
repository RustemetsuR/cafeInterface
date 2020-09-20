import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, CHANGE_CONTACT_DATA, CLEAR_CONTACT_DATA } from "../actionsTypes";

const initialState = {
    loading: false,
    error: null,
    name: '',
    phone: '',
    street: '',
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return { ...state, loading: true };
        case ORDER_SUCCESS:
            return { ...state, loading: false };
        case ORDER_FAILURE:
            return { ...state, loading: false, error: action.error };
        case CHANGE_CONTACT_DATA:
            switch (action.name) {
                case 'name':
                    return { ...state, name: action.value }
                case 'phone':
                    return { ...state, phone: action.value }
                case 'street':
                    return { ...state, street: action.value }
                default:
                    return { ...state }
            }
        case CLEAR_CONTACT_DATA:
            return { ...state, name: '', phone: '', street: '' }
        default:
            return state
    }
};


export default ordersReducer;