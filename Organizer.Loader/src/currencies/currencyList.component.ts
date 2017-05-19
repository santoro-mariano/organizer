import { Component, OnInit } from "@angular/core";

import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { CurrenciesService } from "currencies/currencies.service";

import { Currency } from "entities/currency";

@Component({
    moduleId: module.id,
    templateUrl: "currencyList.component.html",
    styleUrls: ["currencyList.component.css"]
})
export class CurrencyListComponent implements OnInit {
    
    currencies: Array<Currency>;

    constructor(private currenciesService: CurrenciesService, private spinnerService: GlobalSpinnerService){
    }

    ngOnInit(): void {
        this.spinnerService.show("Cargando monedas...");
        this.currenciesService.getCurrencies().subscribe(r => {
            this.currencies = r;
        },e => {},() => this.spinnerService.hide());
    }
}