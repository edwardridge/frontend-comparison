import {autoinject} from 'aurelia-framework';

@autoinject
export class General{
    activate(params){
        this.id = params.id ? +params.id : 1;
    }
    public id: number;
}