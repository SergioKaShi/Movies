import { createReducer, on } from '@ngrx/store';
import { CoreActions } from './../actions';

export const coreFeatureKey = 'core';

export interface CoreState {
    mainLoaderVisible: boolean;
}

const initialState: CoreState = {
    mainLoaderVisible: false
};

export const reducer = createReducer(
    initialState,
    on(CoreActions.showMainLoader, state => ({
        ...state,
        mainLoaderVisible: true
    })),
    on(CoreActions.hideMainLoader, state => ({
        ...state,
        mainLoaderVisible: false
    }))
);

export const getMainLoaderVisible = (state: CoreState) => state.mainLoaderVisible;
