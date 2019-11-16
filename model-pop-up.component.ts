import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { stringify } from '@angular/core/src/render3/util';
// import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-model-pop-up',
  templateUrl: './model-pop-up.component.html',
  styleUrls: ['./model-pop-up.component.css']
})
export class ModelPopUpComponent implements OnInit {

  date: Date; //date Variable
  logedInForm: FormGroup; //These are variables

  name;
  emailId;
  password;

  display = 'none'; //default Variable

  constructor(private route:Router) { }

  ngOnInit() {
    this.date = new Date(); // Today date and time

    //Login Validation
    this.logedInForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      emailId: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])),
      password: new FormControl('', [Validators.minLength(3), Validators.required])
    });

  }

  // Model Driven Form - login
  mdfLogin(logedInForm) {
    debugger;
    this.emailId = logedInForm.emailId;
    this.password = logedInForm.password;
    //alert(JSON.stringify(logedInForm));
    this.route.navigate['/appCompo']
  }

  openModalDialog() {
    this.display = 'block'; //Set block css
  }

  closeModalDialog() {
    this.display = 'none'; //set none css after close dialog
  }


  onReset(logedInForm) {    
    logedInForm.name = '';
    logedInForm.emailId = '';
    logedInForm.password = '';
  }


}
