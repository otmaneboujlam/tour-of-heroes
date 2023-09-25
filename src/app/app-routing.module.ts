import { NgModule } from '@angular/core';
import { HeroesComponent } from './shared/components/heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './shared/components/hero-detail/hero-detail.component';

const routes : Routes= [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
