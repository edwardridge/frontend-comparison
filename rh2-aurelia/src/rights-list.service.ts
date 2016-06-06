import { RightsModel} from './rights.model';

export class RightsListService {
    public OpenAllRights(rightsModels) {
        rightsModels.forEach((rightsModel) => {
            rightsModel.displayDetails = true;
        });
    }
}