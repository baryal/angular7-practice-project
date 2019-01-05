import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
 
  hero: Hero;
  
  constructor(private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

getHero(): void {
  let id: string = this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
    this.location.back();
  }
  }


