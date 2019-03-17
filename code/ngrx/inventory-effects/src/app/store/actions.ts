import { Action } from '@ngrx/store';

export const ADD_PRODUCT = '[Product] add';
export const ADD_PRODUCT_SUCCESS = '[Product] added';
export const ADD_PRODUCT_FAILURE = '[Product] add failure';

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;
    constructor(public payload: { quantity: number }) {}
}

export class AddProductSuccess implements Action {
    readonly type = ADD_PRODUCT_SUCCESS;

    constructor(public payload: { quantity: number }) {}
}

export class AddProductFailure implements Action {
    readonly type = ADD_PRODUCT_FAILURE;

    constructor(public payload: { errorMessage: string }) {}
}

export type ProductActions = AddProduct | AddProductSuccess | AddProductFailure;
