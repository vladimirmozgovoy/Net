import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
test:any;
  key:any;
url:any;
response:any;
code:any;
constructor(private http: HttpClient,private cookie: CookieService, private router:Router) { 
  cookie.deleteAll();
  


}
  ngOnInit() {
    
  }
auth(){
  const params = {'key':this.key}
this.url="http://net.axas.ru/api/auth.php";

this.http.get(this.url,{ params: params }).subscribe((response)=>{
 this.response=response;
 this.code=this.response.code;
 if(this.code==200){
  localStorage.setItem('token', this.response.token);
  this.cookie.set( 'token', this.response.token );
  this.test=this.cookie.get("token");
  console.log(this.test);
  
  this.router.navigate(['/reports']);
  
 }


})

}
}
