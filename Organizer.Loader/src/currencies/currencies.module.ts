import { NgModule } from "@angular/core";

import { CommonModule } from "common/common.module";

import { CurrenciesService } from "currencies/currencies.service";
import { CurrencyListComponent } from "currencies/currencyList.component";
import { CurrencyEditComponent } from "currencies/currencyEdit.component";

@NgModule({
    declarations: [
        CurrencyListComponent,
        CurrencyEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CurrencyListComponent,
        CurrencyEditComponent
    ],
    providers: [
        CurrenciesService
    ]
})
export class CurrenciesModule {}