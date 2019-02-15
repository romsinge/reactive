import { DeleteContact } from 'src/app/store/actions/contact.actions';
import { ActionTypes, AddContact, AddContactSuccess, InitContacts, InitContactsSuccess, DeleteContactSuccess } from './../actions/contact.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, switchMap, flatMap, mergeMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/app/interfaces/contact';

@Injectable()
export class ContactEffects {

  @Effect()
  addContact$ = this.actions$.pipe(
    ofType<AddContact>(ActionTypes.Add),
    mergeMap(action => {
      return this.http.post('http://localhost:3000/contacts', action.payload).pipe(map(contact => {
        return new AddContactSuccess(contact as Contact)
      }))
    })
  )

  @Effect()
  initContacts$ = this.actions$.pipe(
    ofType<InitContacts>(ActionTypes.Init),
    mergeMap(() => {
      return this.http.get('http://localhost:3000/contacts').pipe(map(contacts => {
        return new InitContactsSuccess(contacts as Contact[])
      }))
    })
  )

  @Effect()
  deleteContact$ = this.actions$.pipe(
    ofType<DeleteContact>(ActionTypes.Delete),
    mergeMap(action => {
      return this.http.delete(`http://localhost:3000/contacts/${action.payload}`).pipe(map(() => {
        return new DeleteContactSuccess(action.payload)
      }))
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

}