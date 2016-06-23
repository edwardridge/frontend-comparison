import { RightsModel} from '../../src/rights.model';
import { RightsList } from '../../src/rights-list';
import { RightsListService } from '../../src/rights-list.service';
import { RightsListRepository } from '../../src/rights-list.repository';


describe('Rights list page', () => {
  let rightsList: RightsList;
  let rightsModels;
  beforeEach((done) => {
    rightsModels = [
      new RightsModel(),
      new RightsModel()
    ];
    
    let rightsListRepository = <RightsListRepository>{
      GetRightsList: () => {
        return Promise.resolve(rightsModels);
      }
    }
    
    rightsList = new RightsList(new RightsListService(), rightsListRepository);
    rightsListRepository.GetRightsList().then(() => {
      done();
    });
  });

  let allDisplayDetailsAreShown = (rightsModels) => {
    return rightsModels.every((rc) => {
      return rc.displayDetails;
    });
  }

  it('when all rights are closed, opening all details opens every right', () => {
      rightsList.ViewAllDetails();
      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
  })

  it('when one right is opened, clicking view all details opens every right', () => {
      rightsModels[0].displayDetails = true;

      rightsList.ViewAllDetails();

      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
    });
});

