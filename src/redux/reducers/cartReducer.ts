import { CardReducer } from "../../types/types";

const initialState: CardReducer = {
    Cart: [],
    
}

export const ADD_TO_CART = "ADD_TO_CART";

export const shopReducer = (state = initialState, action: any): CardReducer => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                Cart: [...state.Cart, action.payload]
            }
        default:
            return state
    }
}
