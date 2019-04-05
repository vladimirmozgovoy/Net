import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-photo-reports',
  templateUrl: './photo-reports.component.html',
  styleUrls: ['./photo-reports.component.scss']
})
export class PhotoReportsComponent implements OnInit {
resImg:any;
  img:any;
  photoUrl:any;
  test:any;
  id:any;
url:any;
response:any;
elements:any;
htmlToAdd:any;
style:any;
  constructor(private routes: ActivatedRoute, private http:HttpClient
    ) {
      this.id = this.routes.snapshot.paramMap.get('id');
      this.url="http://net/api/getxml.php?id="+this.id;
      this.photoUrl="http://net/api/getreports.php?id="+this.id;
      
 
      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.object;
       
       
     
     })
     this.http.get(this.photoUrl).subscribe((response)=>{
      this.resImg=response;
      this.img=this.resImg.results[0].photo;
     
      
    
    })
    
    

   }

  ngOnInit() {
  }

}