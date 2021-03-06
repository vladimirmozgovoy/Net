import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { ShopsComponent } from './shops/shops.component';
import { ReportsComponent } from './reports/reports.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoreReportsComponent } from './more-reports/more-reports.component';
import { InfoReportsComponent } from './info-reports/info-reports.component';
import { PhotoReportsComponent } from './photo-reports/photo-reports.component';
import { StellageComponent } from './stellage/stellage.component';
import { UploadComponent } from './upload/upload.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'', component:AuthComponent},
  {path:'agents', component:AgentsComponent},
  {path:'shops', component:ShopsComponent},
  {path:'reports', component:ReportsComponent},
  {path:'upload', component:UploadComponent},
  {path:'reports/info/:id', component:InfoReportsComponent},
  {path:'reports/photo/:id', component:PhotoReportsComponent},
  {path:'reports/stellage/:id', component:StellageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
