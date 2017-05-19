import { Component } from "@angular/core";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";

@Component({
    moduleId: module.id,
    selector: "global-spinner",
    templateUrl: "globalSpinner.component.html",
    styleUrls: ["globalSpinner.component.css"]
})
export class GlobalSpinnerComponent {

    constructor(public globalSpinnerService: GlobalSpinnerService){
    }
}