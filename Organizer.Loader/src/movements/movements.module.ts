import { NgModule } from "@angular/core";

import { CommonModule } from "common/common.module";

import { MovementListComponent } from "movements/movementList.component";
import { MovementEditComponent } from "movements/movementEdit.component";

import { MovementsService } from "movements/movements.service";

@NgModule({
    declarations: [
        MovementListComponent,
        MovementEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MovementListComponent,
        MovementEditComponent
    ],
    providers: [
        MovementsService
    ]
})
export class MovementsModule {}