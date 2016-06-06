import { Rights } from './rights'
import { RightsModel } from './rights.model'
import { RightsListService} from './rights-list.service'
import { RightsListRepository } from './rights-list.repository'
import { autoinject } from 'aurelia-framework';

@autoinject()
export class RightsList{
    constructor(private rightsListService: RightsListService, private rightsListRepository : RightsListRepository){
        this.rightsListRepository.GetRightsList().then((rightsList) => this.rightsList = rightsList);
    }
    public rightsList: RightsModel[];
    
    public ViewAllDetails = () => {
        this.rightsListService.OpenAllRights(this.rightsList);
    }
}

