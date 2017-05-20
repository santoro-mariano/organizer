import { NgModule } from "@angular/core";

import { CommonModule } from "common/common.module";

import { CardListComponent } from "cards/cardList.component";
import { CardEditComponent } from "cards/cardEdit.component";
import { CardCompanyListComponent } from "cards/cardCompanyList.component";
import { CardCompanyEditComponent } from "cards/cardCompanyEdit.component";

import { CardsService } from "cards/cards.service";

@NgModule({
    declarations: [
        CardCompanyListComponent,
        CardCompanyEditComponent,
        CardListComponent,
        CardEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardCompanyListComponent,
        CardCompanyEditComponent,
        CardListComponent,
        CardEditComponent
    ],
    providers: [
        CardsService
    ]
})
export class CardsModule {}