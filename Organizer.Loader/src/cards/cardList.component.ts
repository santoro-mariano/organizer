import { Component, OnInit } from "@angular/core";

import { CardsService } from "cards/cards.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";

import { Card } from "entities/card";

@Component({
    moduleId: module.id,
    templateUrl: "cardList.component.html"
})
export class CardListComponent implements OnInit {

    cards: Array<Card>;

    constructor(private cardsService: CardsService, private spinnerService: GlobalSpinnerService){
    }

    ngOnInit(): void {
        this.spinnerService.show("Cargando tarjetas...");
        this.cardsService.getCards().subscribe(r => {
            this.cards = r;
        },e => {},() => this.spinnerService.hide());
    }
}