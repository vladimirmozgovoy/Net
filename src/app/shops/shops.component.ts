import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  url:any;
  elements:any;
  response:any ;
  headElements = ['ID', 'ERP_ID','Регион', 'Маршруты','Тип','Комерческая сеть','Название магазина','Адрес','Отчет'];
  constructor(private http: HttpClient) { 

    this.url="http://net.axas.ru/api/getshops.php";
  
    this.http.get(this.url).subscribe((response)=>{
     this.response=response;
     this.elements=this.response.results;
  
   
   })


  }

  ngOnInit() {
  }

}
