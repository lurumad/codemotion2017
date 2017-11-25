import { Component, Input, OnInit } from '@angular/core';
import { HeroesClient, Hero } from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroesClient]
})

export class AppComponent implements OnInit{
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroesClient: HeroesClient){

  }

  getHeroes():void{
    this.heroesClient.get().subscribe((data) => this.heroes = data)
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    let name = hero.title.name;
  }

  ngOnInit() : void{
    this.getHeroes();
  }
}
