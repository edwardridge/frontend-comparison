import { Rights } from './rights'
import { RightsModel } from './rights.model'
import { RightsListService} from './rights-list.service'
import { RightsListRepository } from './rights-list.repository'
import { autoinject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject()
export class RightsList{
    private rightsList: RightsModel[];
    
    constructor(private rightsListService: RightsListService, 
                private rightsListRepository : RightsListRepository,
                private ea : EventAggregator)
    {
        this.rightsListRepository
            .GetRightsList()
            .then((rightsList) => this.rightsList = rightsList);
    }
    
    @bindable public title: string  = "Hello";
    
    public ViewAllDetails = () => {
        this.rightsListService.OpenAllRights(this.rightsList);
    }

    public attached(){
        this.ea.publish('rights-list-loaded');
    }
}

