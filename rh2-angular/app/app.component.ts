import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { RightsComponent } from './rights.component'
import {  RightsModel } from './rights.model'
import { RightsListComponent } from './rights-list.component'
import { GeneralComponent } from './general.component'

@Component({
    selector: 'ripi',
    templateUrl: './app/app.component.template.html',
    directives: [ROUTER_DIRECTIVES, RightsListComponent, GeneralComponent]
})
@Routes([
    {path: '/rights', component: RightsListComponent},
    {path: '/general/:id', component: GeneralComponent}
])
export class AppComponent{
    constructor(private router: Router) {}
}
