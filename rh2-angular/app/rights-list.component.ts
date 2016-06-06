import { Component, Input } from '@angular/core';
import { RightsComponent } from './rights.component';
import { RightsModel} from './rights.model';
import { RightsListService } from './rights-list.service'
import { RightsListRepository } from './rights-list.repository'

@Component({
    selector: 'rights-list',
    templateUrl: './app/rights-list.component.template.html',
    directives: [RightsComponent],
    providers: [RightsListService, RightsListRepository]
})
export class RightsListComponent{
    private rightsModels: RightsModel[];
    
    constructor(private rightsListService : RightsListService, private rightsListRepository : RightsListRepository){
        this.rightsListRepository.GetRightsList().then((rightsModels) => this.rightsModels = rightsModels);
    }
    
    public ViewAllDetails = () => { 
        this.rightsListService.OpenAllRights(this.rightsModels);
    };
}