import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './app.module';
import { Fields, Root } from './rsvp-sign-up/rsvp-sign-up.component';

@Injectable({
  providedIn: 'root',
})
export class RegisteredGuestsService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  public loadAllGuests(): Observable<Root> {
    return this.http.get<Root>(`${this.baseUrl}`);
  }

  public addGuest(guest: Fields): Observable<unknown> {
    const body: Root = {
      records: [{ fields: guest }],
    };
    return this.http.post(`${this.baseUrl}`, body);
  }
}
