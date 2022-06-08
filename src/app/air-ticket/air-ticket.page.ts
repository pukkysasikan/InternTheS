import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-air-ticket',
  templateUrl: './air-ticket.page.html',
  styleUrls: ['./air-ticket.page.scss'],
})
export class AirTicketPage implements OnInit {

  public segment: string = "one";
  public date0: any;
  public date1: any;
  public date2: any;

  constructor() {}
  ngOnInit(): void {
      
  }

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

}
