import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import tableReducer from '../weather/table/table.reducer';
import { InitialState } from '../states/';

const reducers = {
  table: tableReducer
}

const devReducer: ActionReducer<InitialState> = compose(combineReducers)(reducers);


export function reducer(state: any, action: any) {
  return devReducer(state, action)
}
