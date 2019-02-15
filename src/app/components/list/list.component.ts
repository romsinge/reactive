import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact';
import { DeleteContact } from 'src/app/store/actions/contact.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts$: Observable<Contact[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.contacts$ = this.store.select('contact')
  }

  delete(id: string): void {
    this.store.dispatch(new DeleteContact(id))
  }
}
