import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  token:any;
  url:any;
  elements:any;
  response:any ;
  headElements = ['ID', 'ERP_ID','Регион', 'Маршруты','Тип','Комерческая сеть','Название магазина','Адрес','Отчет'];
  constructor(private http: HttpClient ,private cookie: CookieService,private router:Router) { 
    this.token=cookie.get("token");
    const params = {'token':this.token};
    this.url="http://net.axas.ru/api/getshops.php";
  
      this.http.get(this.url,{ params: params }).subscribe((response)=>{
     this.response=response;
     this.elements=this.response.results;
     if(this.response.code==300){

     this.router.navigate(['/auth']);
  

     }
   
   })


  }

  ngOnInit() {
  }

}
