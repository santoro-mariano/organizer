import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Movement } from "entities/movement";
import { MovementType } from "entities/movementType";
import { MovementOrigin } from "entities/movementOrigin";
import { Currency } from "entities/currency";
import { Account } from "entities/account";

import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";
import { MovementsService } from "movements/movements.service";
import { CurrenciesService } from "currencies/currencies.service";
import { AccountsService } from "accounts/accounts.service";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/empty";

@Component({
    moduleId: module.id,
    selector: "movement-edit",
    templateUrl: "movementEdit.component.html"
})
export class MovementEditComponent implements OnInit {

    movementTypeEnum = MovementType;
    movementOriginEnum = MovementOrigin;

    isNewItem: boolean;
    model = new Movement();
    currencies: Array<Currency>;
    private accounts: Array<Account>;
    movementDescriptions: Array<string>;

    constructor(private movementsService: MovementsService,
                private currenciesService: CurrenciesService,
                private accountsService: AccountsService,
                private spinnerService: GlobalSpinnerService,
                private messageBoxService: MessageBoxService,
                private router: Router,
                private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.currenciesService.getCurrencies().subscribe(r => {
            this.currencies = r;
        });

        this.accountsService.getAccounts().subscribe(r => {
            this.accounts = r;
        });

        this.movementsService.getMovementDescriptions().subscribe(r => {
            this.movementDescriptions = r;
        });

        this.route.params
        .switchMap((params: Params) => {
            const id = params["movementId"];
            this.isNewItem = id === null || id === undefined;
            if(this.isNewItem){
                return  Observable.empty<Movement>();
            }

            this.spinnerService.show("Cargando movimiento...");
            return this.movementsService.getMovement(+id);
        })
        .subscribe(movement => {
            this.model = movement;
            this.spinnerService.hide();
        });
    }

    saveChanges(): void {
        this.spinnerService.show("Guardando cambios...");
        if(this.isNewItem) {
            this.movementsService.addMovement(this.model).subscribe(r => this.onChangesCompleted(r));
        }
        else {
            this.movementsService.updateMovement(this.model).subscribe(r => this.onChangesCompleted(r));
        }
    }

    cancelEdit(): void {
        this.router.navigate(["/movements"]);
    }

    private onChangesCompleted(result: boolean): void {
        if(this.isNewItem && result){
            const cleanMovement = new Movement();
            cleanMovement.Origin = this.model.Origin;
            cleanMovement.OriginAccountId = this.model.OriginAccountId;
            cleanMovement.CurrencyId = this.model.CurrencyId;
            this.model = cleanMovement;
        }
        this.spinnerService.hide();
        const resultMessage = result ? "Movimiento guardado correctamente" : "No se pudo guardar el movimiento.";
        this.messageBoxService.show(resultMessage);
        if(!this.isNewItem && result){
            this.router.navigate(["/movements"]);
        }
    }
}