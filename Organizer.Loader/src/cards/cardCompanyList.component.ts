import { Component, OnInit } from "@angular/core";

import { CardsService } from "cards/cards.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";

import { CardCompany } from "entities/cardCompany";

@Component({
    moduleId: module.id,
    templateUrl: "cardCompanyList.component.html",
    styleUrls: ["cardCompanyList.component.css"]
})
export class CardCompanyListComponent implements OnInit {

    cardCompanies: Array<CardCompany>;

    constructor(private cardsService: CardsService, private spinnerService: GlobalSpinnerService){
    }

    ngOnInit(): void {
        this.spinnerService.show("Cargando compañías de tarjetas...");
        this.cardsService.getCardCompanies().subscribe(r => {
            this.cardCompanies = r;
        },e => {},() => this.spinnerService.hide());
    }
}