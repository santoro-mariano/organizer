import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

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
        CommonModule,
        RouterModule
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