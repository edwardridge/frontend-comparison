import { RightsModel} from './rights.model';

export class RightsListRepository{
    public GetRightsList = () => {
        let marketingModel: RightsModel = {
            title: "Marketing and Creation Of Products",
            termSplits: [{ value: "During and After Term", selected: true }, { value: "During/After Term", selected: false }],
            rightsGrantedOptions: ["Rights 1", "Rights 2"],
            displayDetails: false
        };

        let physicalModel: RightsModel = {
            title: "Physical Explotation",
            termSplits: [{ value: "During and After Term", selected: true }, { value: "During/After Term", selected: false }],
            rightsGrantedOptions: ["Rights 1", "Rights 2"],
            displayDetails: false
        };
        
        return Promise.resolve([marketingModel, physicalModel]);
    }
    
}
