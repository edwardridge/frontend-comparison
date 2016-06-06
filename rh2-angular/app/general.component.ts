import {Component} from '@angular/core';
import {Router, RouteSegment, OnActivate} from '@angular/router';

@Component({
    selector: 'general',
    template: '<h1>General Rights. Id: {{id}}</h1>'
})
export class GeneralComponent implements OnActivate {
    public id: number;

    routerOnActivate(curr: RouteSegment): void {
        this.id = +curr.getParam('id');
    }
}