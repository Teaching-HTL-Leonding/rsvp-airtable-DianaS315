import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { RsvpSignUpComponent } from './rsvp-sign-up/rsvp-sign-up.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RsvpDataInterceptor } from './rsvp-data.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const BASE_URL = new InjectionToken<string>('BASE_URL');
export const AIRTABLE_PAT = new InjectionToken<string>('AIRTABLE_TOKEN');
@NgModule({
  declarations: [AppComponent, RsvpSignUpComponent, GuestListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: AIRTABLE_PAT,
      useValue:
        'Insert own Pat',
    },
    {
      provide: BASE_URL,
      useValue: ' insert own Database link',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RsvpDataInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
