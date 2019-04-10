import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {
  

  
  img:any;
  url:any;
  elements:any;
  response:any ;
  token:any;
  headElements = ['ID', 'Дата','Магазин', 'Адрес магазина','Задача','Маршрут','Агент','Кол-во фотографий'];
  constructor(private http: HttpClient ,cookie: CookieService, private router:Router) { 
    this.token=cookie.get("token");
    
    const params = {'token':this.token}
  
    this.url="http://net.axas.ru/api/getreports.php";

    this.http.get(this.url,{ params: params }).subscribe((response)=>{
     this.response=response;
     this.elements=this.response.results;
     if(this.response.code==300){
       console.log(this.token);

      this.router.navigate(['/auth']);
  

     }
   
    
 
   
   })


  }

  ngOnInit() {
  }

}