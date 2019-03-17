import {ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ProductActions} from "./actions";

export interface State {
    productQuantity: number;
    error: string;
}

const initialState: State = {
    productQuantity: 0,
    error: ''
};

export function productReducer(state: State = initialState, action: ProductActions) {

    console.log(action);
    switch (action.type) {
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                productQuantity: state.productQuantity + action.payload.quantity,
                error: ''
            }

        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload.errorMessage
            }

        default:
            return state;
    }
}