import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './reducer';

export const getState = createFeatureSelector<State>('productState');
export const getQuantity = createSelector(getState, state => state.productQuantity);
export const getErrorMessage = createSelector(getState, state => state.error);
