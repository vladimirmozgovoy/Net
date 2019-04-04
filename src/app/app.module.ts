import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { ShopsComponent } from './shops/shops.component';
import { ReportsComponent } from './reports/reports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MoreReportsComponent } from './more-reports/more-reports.component';
import { InfoReportsComponent } from './info-reports/info-reports.component';
import { PhotoReportsComponent } from './photo-reports/photo-reports.component';
import { StellageComponent } from './stellage/stellage.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    ShopsComponent,
    ReportsComponent,
    NavComponent,
    HomeComponent,
    MoreReportsComponent,
    InfoReportsComponent,
    PhotoReportsComponent,
    StellageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),   
    ChartsModule 
    
  ],
  exports:[
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
