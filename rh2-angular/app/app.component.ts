import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { RightsComponent } from './rights.component'
import { RightsModel } from './rights.model'
import { RightsListComponent } from './rights-list.component'
import { GeneralComponent } from './general.component'

@Component({
    selector: 'ripi',
    template: `
    <div>Angular 2</div>
   <div>
    <a [routerLink]="['/general/2']" class="btn btn-default">General</a>
    <a [routerLink]="['/rights']" class="btn btn-default">Rights</a>
   </div>
   <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, RightsListComponent, GeneralComponent]
})
@Routes([
    {path: '/rights', component: RightsListComponent},
    {path: '/general/:id', component: GeneralComponent}
])
export class AppComponent implements OnInit{
    constructor(private router: Router) {}
    
    ngOnInit() {
        this.router.navigate(['/general', 1]);
    }
}