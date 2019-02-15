import { ContactEffects } from './store/effects/contact.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { StoreModule } from '@ngrx/store'
import { reducer as contactReducer } from './store/reducers/contact.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { TranslationModule, L10nLoader } from 'angular-l10n'
import { l10nConfig } from './app.translation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      contact: contactReducer
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    HttpClientModule,
    EffectsModule.forRoot([ContactEffects]),
    TranslationModule.forRoot(l10nConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(l10nLoader: L10nLoader) {
    l10nLoader.load()
  }

}
