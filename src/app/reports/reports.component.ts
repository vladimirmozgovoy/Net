import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  headElements = ['ID', 'Дата','Магазин', 'Адрес магазина','Задача','Маршрут','Агент','Кол-во фотографий'];
  constructor(private http: HttpClient) { 

    this.url="http://net/api/getreports.php";
  
    this.http.get(this.url).subscribe((response)=>{
     this.response=response;
     this.elements=this.response.results;
     
    
 
   
   })


  }

  ngOnInit() {
  }

}