import {Component} from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';

@Routes([
    {
        path: '/heroes',
        component: HeroesComponent
    },
    {
        path: '/',
        component: DashboardComponent
    },
    {
        path: '/dashboard',
        component: DashboardComponent
    },
    {
        path: '/detail/:id',
        component: HeroDetailComponent
    }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}