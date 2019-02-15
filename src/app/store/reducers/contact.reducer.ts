import * as ContactActions from './../actions/contact.actions';
import { Contact } from "src/app/interfaces/contact";

const initialState: Contact[] = []

export function reducer(state: Contact[] = initialState, action: any): any {
  
  switch(action.type) {
    case ContactActions.ActionTypes.AddSuccess:
      return [ ...state, Object.assign({}, action.payload) ]
    case ContactActions.ActionTypes.DeleteSuccess:
      return state.filter(contact => {
        return contact.id !== action.payload
      })
    case ContactActions.ActionTypes.InitSuccess:
      return action.payload
    default:
      return state
  }

}