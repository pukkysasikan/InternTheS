import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.page.html',
  styleUrls: ['./addaccount.page.scss'],
})
export class AddaccountPage implements OnInit {
  public fg: FormGroup;
  isFirstTime: boolean;
 
  constructor(private fb: FormBuilder, private route: Router,private memory: HeroService) {
    this.fg = this.fb.group({
      'prompt': null,
      'amount': null,
      'name' : null,
      'recipient' : "Pukky"
    })
  }

  ngOnInit() {
  }

  onSave() {
    console.log("Pukky");
    
    this.memory.data = this.fg.value;
    
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      console.log(param);
      this.route.navigate(['/home'], param);
    }
  }
  onLoad() {
    if (this.memory.data) {
      this.fg.setValue(this.memory.data);
    }
  }
}

