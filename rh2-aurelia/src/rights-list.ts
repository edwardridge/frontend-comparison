import { Rights } from './rights'
import { RightsModel } from './rights.model'
import { RightsListService} from './rights-list.service'
import { RightsListRepository } from './rights-list.repository'
import { autoinject, bindable } from 'aurelia-framework';

@autoinject()
export class RightsList{
    private rightsList: RightsModel[];
    
    constructor(private rightsListService: RightsListService, 
                private rightsListRepository : RightsListRepository)
    {
        this.rightsListRepository
            .GetRightsList()
            .then((rightsList) => this.rightsList = rightsList);
    }
    
    @bindable public title: string  = "Hello";
    
    public ViewAllDetails = () => {
        this.rightsListService.OpenAllRights(this.rightsList);
    }
}

