import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Component } from '@angular/core';
import { InitContacts } from './store/actions/contact.actions';
import { Language, TranslationService, LocaleService } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive';
  @Language() lang: string

  constructor(
    private store: Store<AppState>,
    private auth: AuthService,
    private locale: LocaleService
  ) {}

  ngOnInit() {
    this.store.dispatch(new InitContacts())

    this.locale.setDefaultLocale('fr')
  }

  logout() {
    this.auth.logout()
  }

  changeLanguage(locale: string) {
    this.locale.setCurrentLanguage(locale)
  }
}
