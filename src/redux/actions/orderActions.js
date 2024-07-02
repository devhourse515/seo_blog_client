import { ORDER } from "../variables";

export const setOrder = (orderData) => ({
    type: ORDER.SET_ORDER,
    payload: orderData,
});