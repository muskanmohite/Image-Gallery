import { Component, OnInit } from '@angular/core';

import { ApiService } from "../api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  title="Image-Gallery"
  constructor(private apiService: ApiService,
              private routes: Router) {}
  Items: undefined;
  
  
  

  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      
      this.Items = resp;
      console.log(resp);
    });
  }
  
}




