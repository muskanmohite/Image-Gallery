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

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    
      // LazyLoadImageModule.forRoot({
      //   preset: intersectionObserverPreset
      // }),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
