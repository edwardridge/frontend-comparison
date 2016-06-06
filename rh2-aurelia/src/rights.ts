import { bindable } from 'aurelia-framework';
import {RightsModel} from './rights.model';

export class Rights{
    @bindable public rightsModel: RightsModel = null;
}