import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-photo-reports',
  templateUrl: './photo-reports.component.html',
  styleUrls: ['./photo-reports.component.scss']
})
export class PhotoReportsComponent implements OnInit {
test:any;
  id:any;
url:any;
response:any;
elements:any;
htmlToAdd:any;

  constructor(private routes: ActivatedRoute, private http:HttpClient
    ) {

      this.url="http://net/api/getxml.php";
 
      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.object;
       console.log(this.elements[0].bndbox.xmin);
      
    
     
     })

    this.id = this.routes.snapshot.paramMap.get('id');
    

   }

  ngOnInit() {
  }

}