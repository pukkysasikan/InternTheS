import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.page.html',
  styleUrls: ['./home-template.page.scss'],
})
export class HomeTemplatePage implements OnInit {
  public fg: FormGroup;
  isFirstTime: boolean;
  public data: any[] = [];
  constructor(private fb: FormBuilder, private route: Router,private memory: HeroService) {
    this.fg = this.fb.group({
      'prompt': "0613890852",
      'amount': null,
      'name' : null,
      'recipient' : "Pukky"
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter () {
    if (this.memory.data) {
      this.data.push(this.memory.data)
      this.memory.data = null
    }
  }

  onSelectItem(item) {
    let param: NavigationExtras = { queryParams: { data: JSON.stringify(item) } };
      console.log(param);
      this.route.navigate(['/form-template'], param);
    // Code navigate
}

  // onLoad() {
    // if (this.memory.data) {
    //   this.fg.setValue(this.memory.data);
    // }
  //   else {
  //     alert("ไม่มีข้อมูลที่บันทึก")
  //   }
  // }
}
