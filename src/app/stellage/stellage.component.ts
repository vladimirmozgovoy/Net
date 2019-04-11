import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-stellage',
  templateUrl: './stellage.component.html',
  styleUrls: ['./stellage.component.scss']
})
export class StellageComponent implements OnInit {
 token:any;
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
public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array <any> = ["test"];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF','#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF','#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#4DB3FF', '#1AB399',
    
    
    
    
    
    
    ],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
 

  constructor(private routes: ActivatedRoute, private http:HttpClient,
    private cookie: CookieService ,private router:Router) {
      this.id = this.routes.snapshot.paramMap.get('id');
      this.token=localStorage.getItem("token");
      const params = {'id':this.id,'token':this.token};
      this.url="http://net.axas.ru/api/getinfo.php?id="+this.id+"&token="+this.token;
     
      this.http.get(this.url).subscribe((response)=>{
        this.response=response;
        if(this.response.code==300){

          this.router.navigate(['/auth']);
      
    
         }

        else{
          this.idBeer=this.response.beer;
          this.col=this.response.beer.col;
          
         this.lenght=this.idBeer.length
        this.chartLabels=[this.response.beer[0].id] ;
        this.chartDatasets=[{data:[this.response.beer[0].col] , label: 'Доля полки'}]
      
       console.log( this.chartDatasets[0].data[0]);
        
       
        console.log(this.chartLabels);
         for (let i = 0; i < this.lenght; i++) {
          this.chartLabels[i]=this.response.beer[i].id; 
          this.chartDatasets[0].data[i]=this.response.beer[i].col;

        }
        
      
      
      





        }
        
    
     
      })

      
    }
    ngOnInit() {
      
    
    }
  
    // events
    public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
    

}
