import { Component, OnInit } from "@angular/core";

import { Movement } from "entities/movement";
import { MovementOrigin } from "entities/movementOrigin";

import { MovementsService } from "movements/movements.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";

@Component({
    moduleId: module.id,
    templateUrl: "movementList.component.html",
    styleUrls: ["movementList.component.css"]
})
export class MovementListComponent implements OnInit {

    movements: Array<Movement>;

    movementOriginEnum = MovementOrigin;

    constructor(private movementsService: MovementsService, private spinnerService: GlobalSpinnerService) {
    }

    ngOnInit(): void {
        this.spinnerService.show("Cargando movimientos...");
        this.movementsService.getMovements().subscribe(r => {
            this.movements = r;
        },e => {},() => this.spinnerService.hide());
    }
}