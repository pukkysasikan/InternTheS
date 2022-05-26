import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.page.html',
  styleUrls: ['./form-template.page.scss'],
})
export class FormTemplatePage implements OnInit {
  public isFirstTime: boolean = true;
  public data: any[] = [];
  public fg: FormGroup;


  constructor(private route: ActivatedRoute,private fb: FormBuilder, private router: Router) {

    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'prompt': [null, Validators.required],
      'amount': [null, Validators.required],
      'recipient' : [null, Validators.required]
    });

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["data"];
        if (value) {
          console.log(value);
          // this.fg.patchValue(value);
          this.data = JSON.parse(value);
          this.fg.setValue(this.data);
        }
      });
    }
  }

  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { data: JSON.stringify(this.fg.value) } };
      console.log(param); 
      this.router.navigate(['/form-template2'], param);
    }
  }
  
}
function isInvalid(name: void, string: any) {
  throw new Error('Function not implemented.');
}

