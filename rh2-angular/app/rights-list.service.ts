import { Injectable } from '@angular/core';
import { RightsModel} from './rights.model';

@Injectable()
export class RightsListService {
    public OpenAllRights(rightsModels) {
        rightsModels.forEach((rightsModel) => {
            rightsModel.displayDetails = true;
        });
    }
}