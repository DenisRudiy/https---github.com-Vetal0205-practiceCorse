import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeekDutyComponent } from './components/week-duty/week-duty.component';
import { HourDutyComponent } from './components/hour-duty/hour-duty.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'week-duty', component: WeekDutyComponent },
  { path: 'hour-duty', component: HourDutyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
