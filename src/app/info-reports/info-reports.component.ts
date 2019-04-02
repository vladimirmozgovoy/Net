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
  constructor(private routes: ActivatedRoute, private http:HttpClient
    ) {

      this.url="http://net/api/getxml.php";
  
      this.http.get(this.url).subscribe((response)=>{
       this.response=response;
       this.elements=this.response.object;
       console.log(this.elements);
    
     
     })

    this.id = this.routes.snapshot.paramMap.get('id');
    

   }

  ngOnInit() {
  }

}
