import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
response:any;
  constructor(private http: HttpClient) { }

  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('image', image);

     this.http.post('/net/api/upload.php', formData).subscribe((response)=>{
      this.response=response;
     return this.response;
    
    })
  }

}
