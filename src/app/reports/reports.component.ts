import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  url:any;
  elements:any;
  response:any ;
  headElements = ['ID', 'data','Магазин', 'Адрес магазина','Задача','Маршрут','Агент','Кол-во фотографий'];
  constructor(private http: HttpClient) { 

    this.url="http://net.axas.ru/api/getshops.php";
  
    this.http.get(this.url).subscribe((response)=>{
     this.response=response;
     this.elements=this.response.shops;
  
   
   })


  }

  ngOnInit() {
  }

}