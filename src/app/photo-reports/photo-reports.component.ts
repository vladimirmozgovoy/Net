import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-photo-reports',
  templateUrl: './photo-reports.component.html',
  styleUrls: ['./photo-reports.component.scss']
})
export class PhotoReportsComponent implements OnInit {
token:any;
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
  constructor(private routes: ActivatedRoute,private router:Router, private http:HttpClient, private cookie: CookieService
    ) {
      this.id = this.routes.snapshot.paramMap.get('id');
      this.url="http://net/api/getxml.php";
      this.token=cookie.get("token");
    
      const params = {'id':this.id,'token':this.token}
      this.photoUrl="http://net/api/getphoto.php";
      
 
      this.http.get(this.url,{params:params}).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.object;
  
       
     
     })
     this.http.get(this.photoUrl,{params:params}).subscribe((resImg)=>{
      this.resImg=resImg;
      if(this.resImg.code==300){
      console.log(this.token);

       // this.router.navigate(['/auth']);
    
  
       }
      this.img=this.resImg.results[0].photo;
     
      
    
    })
    
    

   }

  ngOnInit() {
  }

}