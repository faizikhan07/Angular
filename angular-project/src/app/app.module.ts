import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { ClassDirective } from './pages/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    CardsComponent,
    PagesComponent,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
