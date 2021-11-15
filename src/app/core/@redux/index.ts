import { InjectionToken as fromGlobalStore } from '@angular/core';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCore from './reducers/core.reducer';

export interface State {
    [fromCore.coreFeatureKey]: fromCore.CoreState;
}

export const ROOT_REDUCERS = new fromGlobalStore<ActionReducerMap<State, Action>>(
    'Root reducers token',
    {
        factory: () => ({
            [fromCore.coreFeatureKey]: fromCore.reducer
        }),
    }
);

const coreState = createFeatureSelector<fromCore.CoreState>(fromCore.coreFeatureKey);

export const getMainLoaderVisible = createSelector(
    coreState,
    fromCore.getMainLoaderVisible
);
