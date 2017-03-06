import { Action } from '@ngrx/store';

export const ActionTypes = {
  // SHOW: '[TABLE] SHOW',
  // HIDE: '[TABLE] HIDE',
  SWITH: '[TABLE] SWITCH'
}

// export class HideAction implements Action {
//   type = ActionTypes.HIDE;
//
//   constructor(public payload: boolean){
//
//   }
// }
//
// export class ShowAction implements Action {
//   type = ActionTypes.SHOW;
//
//   constructor(public payload: boolean){
//
//   }
// }

export class SwitchAction implements Action {
  type = ActionTypes.SWITCH;

    constructor(public payload: boolean){
}

export type Actions
  // = HideAction | ShowAction;
  = SWITCH;
