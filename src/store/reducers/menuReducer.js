const { FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE, ADD_TO_CART, REMOVE_FROM_CART, SET_MODAL ,CLEAR} = require("../actionsTypes")

const initialState = {
    menu: [],
    cart: [],
    totalPrice: 150,
    loading: false,
    error: null,
    modal: false,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return { ...state, loading: true }
        case FETCH_MENU_SUCCESS:
            return { ...state, loading: false, menu: action.menu }
        case FETCH_MENU_FAILURE:
            return { ...state, loading: false, error: action.error }
        case ADD_TO_CART:
            let addedFood = state.menu.find(food => food.id === action.id);
            let alreadyExistedFood = state.cart.find(food => action.id === food.id);
            if (alreadyExistedFood) {
                addedFood.quantity += 1;
                addedFood.totalPrice = addedFood.price * addedFood.quantity;
                return { ...state, totalPrice: state.totalPrice + addedFood.price }
            } else {
                addedFood.quantity = 1;
                addedFood.totalPrice = addedFood.price * addedFood.quantity;
                let newTotal = state.totalPrice + addedFood.totalPrice;
                return { ...state, cart: [...state.cart, addedFood], totalPrice: newTotal }
            };
        case REMOVE_FROM_CART:
            let foodToRemove = state.cart.find(food => action.id === food.id);
            let newCart = state.cart.filter(food => action.id !== food.id);
            let newTotal = state.totalPrice - (foodToRemove.price * foodToRemove.quantity)
            return { ...state, cart: newCart, totalPrice: newTotal }
        case CLEAR:
            return {...state, cart: [], totalPrice: 150, modal: false}
        case SET_MODAL:
            return { ...state, modal: action.modal };
        default:
            return state
    }
}

export default menuReducer;