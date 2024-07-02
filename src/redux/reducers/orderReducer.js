import { ORDER } from "../variables";

const initialState = {
    products: [],
    ship: 0,
    discount: 0,
    total: 0,
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case ORDER.SET_ORDER:
            console.log('Action Payload:', action.payload);
            return {
                ...state,
                products: action.payload.products,
                ship: action.payload.ship,
                discount: action.payload.discount,
                total: action.payload.total,
            };
        default:
            return state;
    }
}