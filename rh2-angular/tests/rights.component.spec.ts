import { RightsComponent } from '../app/rights.component';
import { RightsModel} from '../app/rights.model';

import { beforeEachProviders, beforeEach, it, describe, async, inject, setBaseTestProviders } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

import { RightsListComponent } from '../app/rights-list.component';
import { RightsListService } from '../app/rights-list.service';
import { RightsListRepository } from '../app/rights-list.repository';

describe('Rights list page', () => {
  let rightsList: RightsListComponent;
  let rightsModels;
  let getRightsPromise;
  beforeEach(() => {
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
    
    rightsList = new RightsListComponent(new RightsListService(), rightsListRepository);
  });

  let allDisplayDetailsAreShown = (rightsModels) => {
    return rightsModels.every((rc) => {
      return rc.displayDetails;
    });
  }

  it('when all rights are closed, clicking view all details opens every section', () => {
    return getRightsPromise.then(() => {
      rightsList.ViewAllDetails();
      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
    });
  })

  it('when one right is opened and another is closed, clicking view all details opens every section', () => {
    return getRightsPromise.then(() => {
      rightsModels[0].displayDetails = true;

      rightsList.ViewAllDetails();

      expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
    })
  })
});

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('The Rights component', () => {
  let fixture;
  let rightsModel = new RightsModel();
  rightsModel.title = "Marketing and Creation Of Products";
  rightsModel.termSplits = [
    { value: "During and After Term", selected: true },
    { value: "During/After Term", selected: false }
  ];

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(RightsComponent).then((componentFixture) => {
      fixture = componentFixture;
      fixture.componentInstance.rightsModel = rightsModel;
      fixture.detectChanges();
    });
  }));

  it('should say "Marketing/Creation Of Products"', () => {
    let title = fixture.nativeElement.querySelector('.rights-title').innerHTML;
    expect(title).toBe('Marketing and Creation Of Products');
  });

  it('contract rights section is removed by default', () => {
    let viewDetailsSection = fixture.nativeElement.querySelector('.view-details-section');
    expect(viewDetailsSection).toBeFalsy();
  });

  it('setting display details should add contract rights to the DOM', () => {
    fixture.componentInstance.rightsModel.displayDetails = true;
    fixture.detectChanges();
    let viewDetailsSection = fixture.nativeElement.querySelector('.view-details-section');
    expect(viewDetailsSection).toBeTruthy();
  });

  // describe('after clicking the view details checkbox', () => {
  //   beforeEach(() => {
  //     fixture.componentInstance.displayDetails = true;
  //     fixture.detectChanges();
  //   });

  //   // it('Term Split defaults to selected term split', () => {
  //   //   let termSplit = fixture.nativeElement.querySelector(rightsModel.termSplits[0].value);
  //   //   // let termSplit = fixture.nativeElement.querySelector('#during-and-after-term');
  //   //   expect(termSplit.checked).toBe(true);
  //   // });
  // });
});

