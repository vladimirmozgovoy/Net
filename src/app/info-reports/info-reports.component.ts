import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { copyObj } from '@angular/animations/browser/src/util';
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
      cookie.deleteAll();
      this.token=cookie.get("token");
      this.id = this.routes.snapshot.paramMap.get('id');
    
      
      this.url="http://net.axas.ru/api/getinfo.php?id="+this.id+"&token="+this.token;

      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.beer;
       console.log(this.token);
       if(this.response.code==300){
         console.log(this.token);
       
        this.router.navigate(['/auth']);
    
  
       }
    
     
     })

    
    

   }

  ngOnInit() {
  }

}
