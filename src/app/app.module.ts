import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/AppComponent/app.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
