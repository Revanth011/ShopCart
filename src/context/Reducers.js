export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const items = [action.payload, ...state.cart];
            return { cart: [...new Set(items)] };
        case "REMOVE_FROM_CART":
            return { cart: state.cart.filter(c => c.id !== action.payload.id) };
        default: return state;
    }
}