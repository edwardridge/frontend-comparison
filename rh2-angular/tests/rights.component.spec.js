"use strict";
var rights_component_1 = require('../app/rights.component');
var rights_model_1 = require('../app/rights.model');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var testing_3 = require('@angular/platform-browser-dynamic/testing');
var rights_list_component_1 = require('../app/rights-list.component');
var rights_list_service_1 = require('../app/rights-list.service');
testing_1.describe('Rights list page', function () {
    var rightsList;
    var rightsModels;
    var getRightsPromise;
    testing_1.beforeEach(function () {
        rightsModels = [
            new rights_model_1.RightsModel(),
            new rights_model_1.RightsModel()
        ];
        var rightsListRepository = {
            GetRightsList: function () {
                getRightsPromise = Promise.resolve(rightsModels);
                return getRightsPromise;
            }
        };
        rightsList = new rights_list_component_1.RightsListComponent(new rights_list_service_1.RightsListService(), rightsListRepository);
    });
    var allDisplayDetailsAreShown = function (rightsModels) {
        return rightsModels.every(function (rc) {
            return rc.displayDetails;
        });
    };
    testing_1.it('when all rights are closed, clicking view all details opens every section', function () {
        return getRightsPromise.then(function () {
            rightsList.ViewAllDetails();
            expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
        });
    });
    testing_1.it('when one right is opened and another is closed, clicking view all details opens every section', function () {
        return getRightsPromise.then(function () {
            rightsModels[0].displayDetails = true;
            rightsList.ViewAllDetails();
            expect(allDisplayDetailsAreShown(rightsModels)).toBe(true);
        });
    });
});
testing_1.setBaseTestProviders(testing_3.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, testing_3.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
testing_1.describe('The Rights component', function () {
    var fixture;
    var rightsModel = new rights_model_1.RightsModel();
    rightsModel.title = "Marketing and Creation Of Products";
    rightsModel.termSplits = [
        { value: "During and After Term", selected: true },
        { value: "During/After Term", selected: false }
    ];
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(rights_component_1.RightsComponent).then(function (componentFixture) {
            fixture = componentFixture;
            fixture.componentInstance.rightsModel = rightsModel;
            fixture.detectChanges();
        });
    }));
    testing_1.it('should say "Marketing/Creation Of Products"', function () {
        var title = fixture.nativeElement.querySelector('.rights-title').innerHTML;
        expect(title).toBe('Marketing and Creation Of Products');
    });
    testing_1.it('contract rights section is removed by default', function () {
        var viewDetailsSection = fixture.nativeElement.querySelector('.view-details-section');
        expect(viewDetailsSection).toBeFalsy();
    });
    testing_1.it('setting display details should add contract rights to the DOM', function () {
        fixture.componentInstance.rightsModel.displayDetails = true;
        fixture.detectChanges();
        var viewDetailsSection = fixture.nativeElement.querySelector('.view-details-section');
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
//# sourceMappingURL=rights.component.spec.js.map