import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { StrengthPasswordSectionComponent } from './strength-password-section/strength-password-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    StrengthPasswordSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
