import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrl: './nestedform.component.css'
})
export class NestedformComponent {

  submittedData : any;

  nested = new FormGroup({
    name : new FormGroup({
      fname : new FormControl('',Validators.required),
      mname : new FormControl(''),
      lname : new FormControl('',Validators.required)}),
    email : new FormControl('',Validators.required),
    mobile : new FormControl('',Validators.required),
    address : new FormGroup({
      Street : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required),
      zip : new FormControl('',Validators.required),
    }),
   
  })

  onsubmit(){
    if(this.nested.valid){
    this.submittedData = this.nested.value;
    console.log(this.submittedData)
  }
  }
}
