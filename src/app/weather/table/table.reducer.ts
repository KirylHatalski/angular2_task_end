import * as TableActions from '../../actions/table.actions';

import { TableState, initialTableState } from '../states/table.states'

export default function (state = initialTableState, action = TableActions.Actions) : TableState {
  switch(action.type){
    // case TableActions.ActionTypes.SHOW: {
    //   const {table} = state;
    //   return Object.assign[{}, state, {table: action.payload}]
    // }
    //
    // case TableActions.ActionTypes.HIDE: {
    //   const {table} = state;
    //   return Object.assign[{}, state, {table: action.payload}]
    // }

    case TableActions.ActionTypes.SWITCH: {
      const {table} = state;
      return Object.assign[{}, state, {table: action.payload}]
    }

    default:
      return state;
  }
}
