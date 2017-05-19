import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Card } from "entities/card";
import { CardType } from "entities/cardType";
import { CardCompany } from "entities/cardCompany";

import { CardsService } from "cards/cards.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/empty";

@Component({
    moduleId: module.id,
    templateUrl: "cardEdit.component.html"
})
export class CardEditComponent implements OnInit {

    cardTypeEnum = CardType;

    isNewItem: boolean;
    model = new Card();
    companies: Array<CardCompany>;

    constructor(private cardsService: CardsService,
                private spinnerService: GlobalSpinnerService,
                private messageBoxService: MessageBoxService,
                private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.cardsService.getCardCompanies().subscribe(r => {
            this.companies = r;
        });

        this.route.params
        .switchMap((params: Params) => {
            const id = params["cardId"];
            this.isNewItem = id === null || id === undefined;
            if(this.isNewItem){
                return  Observable.empty<Card>();
            }

            this.spinnerService.show("Cargando tarjeta...");
            return this.cardsService.getCard(+id);
        })
        .subscribe(card => {
            this.model = card;
            this.spinnerService.hide();
        });
    }

    saveChanges(): void {
        this.spinnerService.show("Guardando cambios...");
        if(this.isNewItem) {
            this.cardsService.addCard(this.model).subscribe(r => this.onChangesCompleted(r));
        }
        else {
            this.cardsService.updateCard(this.model).subscribe(r => this.onChangesCompleted(r));
        }
    }

    private onChangesCompleted(result: boolean): void {
        this.spinnerService.hide();
        const resultMessage = result ? "Tarjeta guardada correctamente" : "No se pudo guardar la tarjeta.";
        this.messageBoxService.show(resultMessage);
    }
}