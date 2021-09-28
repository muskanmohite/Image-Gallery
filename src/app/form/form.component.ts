import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { invalid } from 'node_module/@angular/compiler/src/render3/view/util';
import { AbstractControl } from 'node_module/@angular/forms/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
    
  form!: FormGroup;

constructor( private router:Router,
  private formBuilder: FormBuilder){}
 

  ngOnInit() {

    this.form= new FormGroup({
      'name':new FormControl("",Validators.required),
      'emails':new FormControl(null, [Validators.required,Validators.email])

    })
    // this.form = this.formBuilder.group({
    //   name : (['', Validators.required]),
        
    //     emails: ['', [Validators.required,Validators.email]],
      
    // });
  

   //this.form.valueChanges.subscribe(data => console.log(data));
  }
  
  get name ()
  {
      return this.form.get('name') as FormControl
  }
  get emails(){
    return this.form.get('emails') as FormControl

  }




  send(pageName:string):void{

    if (this.form.invalid){
      return;
    }
  alert("THANKS FOR REACHING US");
 
  setTimeout(() =>{ 
  this.router.navigate([`${pageName}`]); }, 4000);
  
}

}




