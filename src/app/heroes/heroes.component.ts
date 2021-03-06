import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name: 'Wisdom'
  };

  selectedHero : Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }
}
