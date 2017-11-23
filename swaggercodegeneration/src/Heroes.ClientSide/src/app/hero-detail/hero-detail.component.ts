import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../services/services'  

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
