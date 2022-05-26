import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-dialog-template',
  templateUrl: './cart-dialog-template.page.html',
  styleUrls: ['./cart-dialog-template.page.scss'],
})
export class CartDialogTemplatePage implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          this.data = JSON.parse(value);
          console.log(this.data);
        }
      });
    }
  }

  ngOnInit() {
  }

}
