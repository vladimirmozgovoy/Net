import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  token:any;
  url:any;
  elements:any;
  response:any ;
  headElements = ['ID', 'ФИО','Дата', 'Маршруты'];
  constructor(private http: HttpClient,private cookie: CookieService,private router:Router) {
    this.token=localStorage.getItem('token');
    
    const params = {'token':this.token};
    this.url="http://net.axas.ru/api/getagents.php";
  
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
