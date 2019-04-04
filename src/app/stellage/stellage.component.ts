import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-stellage',
  templateUrl: './stellage.component.html',
  styleUrls: ['./stellage.component.scss']
})
export class StellageComponent implements OnInit {
 addText:any;
  lenght:any;
  col:any;
  idBeer:any;
  id:any;
url:any;
response:any;
elements:any;
t:string ;
test:string[];
public doughnutChartLabels: Label[]=["t"];

public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70],
];
public doughnutChartType: ChartType = 'doughnut';

  constructor(private routes: ActivatedRoute, private http:HttpClient
    ) {

     this.url=("http://net/api/getinfo.php?id=1");
      this.id = this.routes.snapshot.paramMap.get('id');
      this.http.get(this.url).subscribe((response)=>{
        this.response=response;
        this.idBeer=this.response.beer;
        this.col=this.response.beer.col;
       
       this.lenght=this.idBeer.length
       for (let i = 0; i < this.lenght; i++) {
       //this.test.push(JSON.stringify(this.response.beer[i].id));
        //console.log(this.test);
        //this.doughnutChartLabels=[this.t];

        }
    
     
      })

      
    }
    ngOnInit() {
      
    
    }
  
    // events
   
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
