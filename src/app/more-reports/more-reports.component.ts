import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-more-reports',
  templateUrl: './more-reports.component.html',
  styleUrls: ['./more-reports.component.scss']
})
export class MoreReportsComponent implements OnInit {
id:any;
test="Информация";
information() {
  this.test = 'Информация';
}
photo() {
  this.test = 'Фото';
}
dol() {
  this.test = "Доля полки";
}
price() {
  this.test = "Цена";
}
  constructor(private routes: ActivatedRoute,
    ) {

    this.id = this.routes.snapshot.paramMap.get('id');
    

   }

  ngOnInit() {
  
   
  
  }

}
