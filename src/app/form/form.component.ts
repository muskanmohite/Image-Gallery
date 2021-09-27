import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms'



@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  // name = new FormControl('');  
 
  form!: FormGroup;

constructor( private router:Router,
  private formBuilder: FormBuilder){}
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.group({
        name: ['', [Validators.required,Validators.maxLength]],
        emails: ['', [Validators.required,Validators.email]],
    
  })
    });
    this.form.valueChanges.subscribe(data => console.log(data));
  }
 



  send(pageName:string):void{
    
  alert("THANKS FOR REACHING US");
 
  setTimeout(() =>{ 
  this.router.navigate([`${pageName}`]); }, 4000);
  
}



}

