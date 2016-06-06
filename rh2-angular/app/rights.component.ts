import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RightsModel} from './rights.model';

@Component({
    selector: 'rights',
    templateUrl: './app/rights.component.template.html',
    styleUrls: ['./app/rights.component.css']
})
export class RightsComponent{
    @Input()
    public rightsModel : RightsModel;
}