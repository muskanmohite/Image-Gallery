import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
// import {
//   LazyLoadImageModule,
//   intersectionObserverPreset
// } from "ng-lazyload-image";


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ApiService } from './api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FormComponent
   
  ],
  imports: [
        
        ReactiveFormsModule,
      // LazyLoadImageModule.forRoot({
      //   preset: intersectionObserverPreset
      // }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   
   
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
