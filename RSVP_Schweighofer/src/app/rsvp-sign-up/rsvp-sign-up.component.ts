import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisteredGuestsService } from '../registered-guests.service';

export interface Root {
  records: Record[];
}

export interface Record {
  id?: string;
  createdTime?: string;
  fields: Fields;
}

export interface Fields {
  guestName: string;
  willAttend: boolean;
  additionalInformation?: string;
  additionalGuest?: boolean;
  nameOfAdditionalGuest?: string;
}

@Component({
  selector: 'app-rsvp-sign-up',
  templateUrl: './rsvp-sign-up.component.html',
  styleUrls: ['./rsvp-sign-up.component.css'],
})
export class RsvpSignUpComponent implements OnInit {
  public dataFromServer?: Root;
  public currentItem!: Fields;

  constructor(
    private guestService: RegisteredGuestsService
  ) {
    this.currentItem = { guestName: ' ', willAttend: false };
  }

  ngOnInit(): void {
    this.guestService
      .loadAllGuests()
      .subscribe((data) => (this.dataFromServer = data));
    console.log(this.dataFromServer);
  }

  public addGuest(): void {
    this.guestService
      .addGuest(this.currentItem)
      .subscribe(() => this.ngOnInit());
    this.currentItem = { guestName: ' ', willAttend: false };
  }
}
