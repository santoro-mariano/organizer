import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { CardCompany } from "entities/cardCompany";

import { CardsService } from "cards/cards.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/empty";

@Component({
    moduleId: module.id,
    templateUrl: "cardCompanyEdit.component.html"
})
export class CardCompanyEditComponent implements OnInit {

    isNewItem: boolean;
    model = new CardCompany();

    constructor(private cardsService: CardsService,
                private spinnerService: GlobalSpinnerService,
                private messageBoxService: MessageBoxService,
                private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => {
            const id = params["cardCompanyId"];
            this.isNewItem = id === null || id === undefined;
            if(this.isNewItem){
                return  Observable.empty<CardCompany>();
            }

            this.spinnerService.show("Cargando compañía de tarjeta...");
            return this.cardsService.getCardCompany(+id);
        })
        .subscribe(cardCompany => {
            this.model = cardCompany;
            this.spinnerService.hide();
        });
    }

    saveChanges(): void {
        this.spinnerService.show("Guardando cambios...");
        if(this.isNewItem) {
            this.cardsService.addCardCompany(this.model).subscribe(r => this.onChangesCompleted(r));
        }
        else {
            this.cardsService.updateCardCompany(this.model).subscribe(r => this.onChangesCompleted(r));
        }
    }

    private onChangesCompleted(result: boolean): void {
        if (this.isNewItem && result) {
            const cleanCardCompany = new CardCompany();
            this.model = cleanCardCompany;
        }
        this.spinnerService.hide();
        const resultMessage = result ? "Compañía de tarjeta guardada correctamente" : "No se pudo guardar la compañía de tarjeta.";
        this.messageBoxService.show(resultMessage);
    }
}