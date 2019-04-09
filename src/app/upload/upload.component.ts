import { Component, OnInit } from '@angular/core';

import {  HttpClient } from '@angular/common/http';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
response:any;
  selectedFile: ImageSnippet;

  constructor(private http:HttpClient){}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    const formData = new FormData();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      formData.append('picture', this.selectedFile.file,this.selectedFile.file.name);
     

     this.http.post('http://net/api/upload.php', formData).subscribe((response)=>{
      this.response=response;
      if(this.response.message="Success"){this.onSuccess();}
      else{this.onError();}
      
    })

    });

    reader.readAsDataURL(file);
  }

  ngOnInit() {
  }

}
