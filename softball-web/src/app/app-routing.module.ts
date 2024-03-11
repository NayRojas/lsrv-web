import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ResultsComponent } from './features/results/results.component';
import { StatisticsComponent } from './features/statistics/statistics.component';
import { TeamStatisticsComponent } from './features/team-statistics/team-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'resultados', component: ResultsComponent },
  { path: 'estadisticas', component: StatisticsComponent },
  { path: 'estadisticasteam', component: TeamStatisticsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
