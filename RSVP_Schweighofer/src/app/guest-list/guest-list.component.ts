import { Component, OnInit } from '@angular/core';
import { RegisteredGuestsService } from '../registered-guests.service';
import { Root } from '../rsvp-sign-up/rsvp-sign-up.component';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css'],
})
export class GuestListComponent implements OnInit {
  public dataFromServer!: Root;

  constructor(private guestService: RegisteredGuestsService) {}

  public ngOnInit(): void {
    this.guestService
      .loadAllGuests()
      .subscribe((data) => (this.dataFromServer = data));
  }

  public getData() {
    return this.dataFromServer!.records;
  }

  public totalAmountOfGuests(): number {
    let count: number = this.dataFromServer?.records.length;

    for (let entry of this.dataFromServer?.records) {
      if (entry.fields.willAttend) {
        count++;
        if (entry.fields.additionalGuest) {
          count++;
        }
      }
    }

    return count;
  }
}
