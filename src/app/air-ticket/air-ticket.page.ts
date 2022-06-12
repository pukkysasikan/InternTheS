import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-air-ticket',
  templateUrl: './air-ticket.page.html',
  styleUrls: ['./air-ticket.page.scss'],
})
export class AirTicketPage implements OnInit {
  public segment: string = 'one';
  private today = new Date();
  public date0: any = format(this.today, 'dd/MM/yyyy');
  public date1: any = format(this.today, 'dd/MM/yyyy');
  public date2: any = format(this.today, 'dd/MM/yyyy');

  public people0: number = 0;
  public people1: number = 0;
  public people2: number = 0;

  constructor(private alertController: AlertController) {}
  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  formatDate0(value: string) {
    this.date0 = format(parseISO(value), 'dd/MM/yyyy');
  }
  formatDate1(value: string) {
    this.date1 = format(parseISO(value), 'dd/MM/yyyy');
  }
  formatDate2(value: string) {
    this.date2 = format(parseISO(value), 'dd/MM/yyyy');
  }

  incrementPeople0() {
    if (this.people0 < 5) {
      this.people0++;
    }
  }
  decrementPeople0() {
    if (this.people0 > 0) {
      this.people0--;
    }
  }

  incrementPeople1() {
    if (this.people1 < 5) {
      this.people1++;
    }
  }
  decrementPeople1() {
    if (this.people1 > 0) {
      this.people1--;
    }
  }

  incrementPeople2() {
    if (this.people2 < this.people0) {
      this.people2++;
    }
  }
  decrementPeople2() {
    if (this.people2 > 0) {
      this.people2--;
    }
  }
}
