import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-info-reports',
  templateUrl: './info-reports.component.html',
  styleUrls: ['./info-reports.component.scss']
})
export class InfoReportsComponent implements OnInit {
id:any;
url:any;
response:any;
elements:any;
headElements = ['Название продукта','Количество'];
  constructor(private routes: ActivatedRoute, private http:HttpClient
    ) {
      this.id = this.routes.snapshot.paramMap.get('id');
      this.url="http://net/api/getinfo.php?id="+this.id;
  
      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.beer;
      console.log(this.elements);
    
     
     })

    
    

   }

  ngOnInit() {
  }

}
