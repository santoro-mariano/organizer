import { Component, OnInit } from "@angular/core";

import { Movement } from "entities/movement";
import { MovementOrigin } from "entities/movementOrigin";

import { MovementsService } from "movements/movements.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";
import { MessageBoxButtons } from "common/messageBox/messageBoxButtons";
import { MessageBoxResult } from "common/messageBox/messageBoxResult";

@Component({
    moduleId: module.id,
    templateUrl: "movementList.component.html",
    styleUrls: ["movementList.component.css"]
})
export class MovementListComponent implements OnInit {

    movements: Array<Movement>;

    movementOriginEnum = MovementOrigin;

    constructor(private movementsService: MovementsService,
                private spinnerService: GlobalSpinnerService,
                private messageBox: MessageBoxService) {
    }

    ngOnInit(): void {
        this.loadMovements();
    }

    deleteMovement(movementId: number): void {
        this.messageBox.show("Esta seguro que desea eliminar el movimiento?", "Confirmación de Eliminación", MessageBoxButtons.YesNo).subscribe(r =>{
            if(r === MessageBoxResult.Yes) {
                this.movementsService.deleteMovement(movementId).subscribe(result => {
                    if(result) {
                        this.loadMovements();
                    }
                    else {
                        this.messageBox.show("Ocurrió un error al intentar eliminar el movimiento.");
                    }
                });
            }
        });
    }

    private loadMovements(): void {
        this.spinnerService.show("Cargando movimientos...");
        this.movementsService.getMovements().subscribe(r => {
            this.movements = r;
        },e => {},() => this.spinnerService.hide());
    }
}