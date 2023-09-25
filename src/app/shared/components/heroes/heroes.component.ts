import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/providers/hero.service';
import { MessageService } from 'src/app/providers/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
