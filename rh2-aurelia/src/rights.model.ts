export class RightsModel{
    public title: string;
    public termSplits: RadioButtonValue[];
    public rightsGrantedOptions: string[] = [];
    public displayDetails: boolean = false;
}

class RadioButtonValue{
    public value: string;
    public selected: boolean;
}