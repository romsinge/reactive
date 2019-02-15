import { Action } from '@ngrx/store';
import { Contact } from './../../interfaces/contact';

export enum ActionTypes {
  Add = '[Contact] Add',
  AddSuccess = '[Contact] Add Success',
  Init = '[Contact] Init',
  InitSuccess = '[Contact] Init Success',
  Delete = '[Contact] Delete',
  DeleteSuccess = '[Contact] DeleteSuccess',
}

export class AddContact implements Action {

  readonly type: string = ActionTypes.Add

  constructor(public payload: Contact) {}
}

export class InitContacts implements Action {

  readonly type: string = ActionTypes.Init
}

export class InitContactsSuccess implements Action {

  readonly type: string = ActionTypes.InitSuccess

  constructor(public payload: Contact[]) {}
}

export class AddContactSuccess implements Action {

  readonly type: string = ActionTypes.AddSuccess

  constructor(public payload: Contact) {}
}

export class DeleteContact implements Action {

  readonly type: string = ActionTypes.Delete

  constructor(public payload: string) {}
}

export class DeleteContactSuccess implements Action {

  readonly type: string = ActionTypes.DeleteSuccess

  constructor(public payload: string) {}
}

export type Actions = AddContact | AddContactSuccess | DeleteContact | InitContacts