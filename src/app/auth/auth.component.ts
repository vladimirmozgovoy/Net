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
key:any;
url:any;
response:any;
code:any;
constructor(private http: HttpClient,private cookieService: CookieService, private router:Router) { 

 


}
  ngOnInit() {
    
  }
auth(){
  const params = {'key':this.key}
this.url="http://net/api/auth.php";

this.http.get(this.url,{ params: params }).subscribe((response)=>{
 this.response=response;
 this.code=this.response.code;
 if(this.code==200){
  this.cookieService.set( 'token', this.response.token );
  this.router.navigate(['/reports']);
  
 }


})

}
}
