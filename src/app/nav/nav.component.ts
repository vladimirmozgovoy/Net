import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
exit(){

  localStorage.removeItem("token");
  this.router.navigate(['/auth']);
}
}
