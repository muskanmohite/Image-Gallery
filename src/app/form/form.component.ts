import { Component } from '@angular/core';
import{Router} from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {

constructor( private router:Router){}

goToPage(pageName:string):void{
    
  alert("Thanks to reaching us");
 
  setTimeout(() =>{ 
  this.router.navigate([`${pageName}`]); }, 4000);
  
}



}

