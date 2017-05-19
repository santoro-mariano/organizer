import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { CurrenciesService } from "currencies/currencies.service";
import { Currency } from "entities/currency";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/empty";

@Component({
    moduleId: module.id,
    selector: "currency-edit",
    templateUrl: "currencyEdit.component.html"
})
export class CurrencyEditComponent implements OnInit {
    
    isNewItem: boolean;
    model = new Currency();

    constructor(private currenciesService: CurrenciesService,
                private spinnerService: GlobalSpinnerService,
                private messageBoxService: MessageBoxService,
                private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => {
            const id = params["currencyId"];
            this.isNewItem = id === null || id === undefined;
            if(this.isNewItem){
                return  Observable.empty<Currency>();
            }

            this.spinnerService.show("Cargando moneda...");
            return this.currenciesService.getCurrency(+id);
        })
        .subscribe(currency => {
            this.model = currency;
            this.spinnerService.hide();
        });
    }

    saveChanges(): void {
        this.spinnerService.show("Guardando cambios...");
        if(this.isNewItem) {
            this.currenciesService.addCurrency(this.model).subscribe(r => this.onChangesCompleted(r));
        }
        else {
            this.currenciesService.updateCurrency(this.model).subscribe(r => this.onChangesCompleted(r));
        }
    }

    private onChangesCompleted(result: boolean): void {
        this.spinnerService.hide();
        const resultMessage = result ? "La moneda se guardo correctamente" : "No se pudo guardar la moneda.";
        this.messageBoxService.show(resultMessage);
    }
}