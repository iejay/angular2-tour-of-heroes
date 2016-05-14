import {Component, Input, OnInit} from '@angular/core';
import {Routes, RouteSegment} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    
    constructor(
        private _heroService: HeroService) {
    }
    
    ngOnInit() {
        
    }
    
    goBack() {
        window.history.back();
    }
    
    routerOnActivate(curr: RouteSegment) {
        let id = parseInt(curr.getParam('id'));
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    
}