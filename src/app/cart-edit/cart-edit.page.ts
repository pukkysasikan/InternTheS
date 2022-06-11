import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.page.html',
  styleUrls: ['./cart-edit.page.scss'],
})
export class CartEditPage implements OnInit {

  private today = new Date();
  public date0: any = format(this.today, 'dd/MM/yyyy');
  constructor() { }

  ngOnInit() {
  }
  formatDate0(value: string) {
    this.date0 = format(parseISO(value), 'dd/MM/yyyy');
  }
}
