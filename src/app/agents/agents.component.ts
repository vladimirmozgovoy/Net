import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  url:any;
  elements:any;
  response:any ;
  headElements = ['ID', 'ФИО','Дата', 'Маршруты'];
  constructor(private http: HttpClient) {

    this.url="http://net.axas.ru/api/getagents.php";
  
     this.http.get(this.url).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.agents;
   
    
    })

   }

  ngOnInit() {
  }

}
