import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-info-reports',
  templateUrl: './info-reports.component.html',
  styleUrls: ['./info-reports.component.scss']
})
export class InfoReportsComponent implements OnInit {
token:any;
  id:any;
url:any;
response:any;
elements:any;
headElements = ['Название продукта','Количество'];
  constructor(private routes: ActivatedRoute,private router:Router, private http:HttpClient
    ,private cookie: CookieService ) {
   
      this.id = this.routes.snapshot.paramMap.get('id');
      this.token=cookie.get("token");
      const params = {'id':this.id,'token':this.token};
      this.url="http://net/api/getinfo.php";

      this.http.get(this.url,{params:params}).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.beer;
       
       if(this.response.code==300){

        this.router.navigate(['/auth']);
    
  
       }
    
     
     })

    
    

   }

  ngOnInit() {
  }

}
