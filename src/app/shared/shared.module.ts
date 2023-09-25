import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../shared/components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../shared/components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../shared/components/messages/messages.component';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroSearchComponent } from '../shared/components/hero-search/hero-search.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeroesComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
