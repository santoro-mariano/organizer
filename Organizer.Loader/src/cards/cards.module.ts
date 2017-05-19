import { NgModule } from "@angular/core";

import { CommonModule } from "common/common.module";

import { CardListComponent } from "cards/cardList.component";
import { CardEditComponent } from "cards/cardEdit.component";

import { CardsService } from "cards/cards.service";

@NgModule({
    declarations: [
        CardListComponent,
        CardEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardListComponent,
        CardEditComponent
    ],
    providers: [
        CardsService
    ]
})
export class CardsModule {}