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
      this.token=localStorage.getItem("token");
      console.log(this.token);
      this.id = this.routes.snapshot.paramMap.get('id');
      this.url="http://net.axas.ru/api/getxml.php?id="+this.id+"&token="+this.token;
      
      
      
      //this.photoUrl="http://net.axas.ru/api/getphoto.php";
      this.photoUrl="http://net.axas.ru/api/getphoto.php?id="+this.id+"&token="+this.token;
      console.log(this.token);
      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.object;
   
  
       
     
     })
     this.http.get(this.photoUrl).subscribe((resImg)=>{
      this.resImg=resImg;
      
      console.log(this.resImg);
      if(this.resImg.code==300){
      console.log(this.token);
       this.router.navigate(['/auth']);
      
       }
       else{
        this.img=this.resImg.results[0].photo;
       }
     
     
      
      
    })
    
    

   }

  ngOnInit() {
  }

}