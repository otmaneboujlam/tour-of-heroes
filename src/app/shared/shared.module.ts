import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../shared/components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../shared/components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../shared/components/messages/messages.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroesComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
