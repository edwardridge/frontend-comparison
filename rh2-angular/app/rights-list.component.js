"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rights_component_1 = require('./rights.component');
var rights_list_service_1 = require('./rights-list.service');
var rights_list_repository_1 = require('./rights-list.repository');
var RightsListComponent = (function () {
    function RightsListComponent(rightsListService, rightsListRepository) {
        var _this = this;
        this.rightsListService = rightsListService;
        this.rightsListRepository = rightsListRepository;
        this.title = "Contracts - Angular 2";
        this.ViewAllDetails = function () {
            _this.rightsListService.OpenAllRights(_this.rightsModels);
        };
        this.rightsListRepository
            .GetRightsList()
            .then(function (rightsModels) { return _this.rightsModels = rightsModels; });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RightsListComponent.prototype, "title", void 0);
    RightsListComponent = __decorate([
        core_1.Component({
            selector: 'rights-list',
            templateUrl: './app/rights-list.component.template.html',
            directives: [rights_component_1.RightsComponent],
            styleUrls: ['./app/rights-list.component.css'],
            providers: [rights_list_service_1.RightsListService, rights_list_repository_1.RightsListRepository]
        }), 
        __metadata('design:paramtypes', [rights_list_service_1.RightsListService, rights_list_repository_1.RightsListRepository])
    ], RightsListComponent);
    return RightsListComponent;
}());
exports.RightsListComponent = RightsListComponent;
//# sourceMappingURL=rights-list.component.js.map