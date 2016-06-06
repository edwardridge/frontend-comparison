import { RightsModel} from '../../src/rights.model';
import { RightsList } from '../../src/rights-list';
import { RightsListService } from '../../src/rights-list.service';
import { RightsListRepository } from '../../src/rights-list.repository';


describe('Rights list page', () => {
  let rightsList: RightsList;
  let rightsModels;
  let getRightsPromise;
  beforeEach((done) => {
    rightsModels = [
      new RightsModel(),
      new RightsModel()
    ];
    
    let rightsListRepository = <RightsListRepository>{
      GetRightsList: () => {
        getRightsPromise = Promise.resolve(rightsModels);
        return getRightsPromise;
      }
    }
    
    rightsList = new RightsList(new RightsListService(), rightsListRepository);
    getRightsPromise.then(() => {
      done();
    });
  });

  let allDisplayDetailsAreShown = (rightsModels) => {
    return rightsModels.every((rc) => {
      return rc.displayDetails;
    });
  }

  it('when all rights are closed, clicking view all details opens every section', () => {
      rightsList.ViewAllDetails();
      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
  })

  it('when one right is opened and another is closed, clicking view all details opens every section', () => {
      rightsModels[0].displayDetails = true;

      rightsList.ViewAllDetails();

      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
    });
});

