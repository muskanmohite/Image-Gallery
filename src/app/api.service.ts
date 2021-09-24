import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
   x: undefined;
 
  constructor(private httpClient: HttpClient) {}


  Key = "oJ5C-pMgRf7_o8UtY35gjur8_8NSvoiieTV0MMexnOg";
  page= 1;
  per_page = 21;


   getImage()   
    {
      return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }

 

}
