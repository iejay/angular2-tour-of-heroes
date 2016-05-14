import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    public heroes: Hero[];
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    onSelect(hero: Hero) { this.selectedHero = hero };
    
    ngOnInit() {
        this.getHeroes();
    }
    
    gotoDetail() {
        this._router.navigate([`/detail/${this.selectedHero.id}`]);
    }
}