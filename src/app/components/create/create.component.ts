import { AddContact } from './../../store/actions/contact.actions';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  contact: Contact = {
    firstName: "",
    lastName: "",
    email: ""
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.store.dispatch(new AddContact(this.contact))
  }

}
