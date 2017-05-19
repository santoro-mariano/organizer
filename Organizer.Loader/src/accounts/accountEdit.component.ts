import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { AccountsService } from "accounts/accounts.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";

import { Account } from "entities/account";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/empty";

@Component({
    moduleId: module.id,
    templateUrl: "accountEdit.component.html"
})
export class AccountEditComponent implements OnInit {

    isNewItem: boolean;
    model = new Account();

    constructor(private accountsService: AccountsService,
                private spinnerService: GlobalSpinnerService,
                private messageBoxService: MessageBoxService,
                private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => {
            const id = params["accountId"];
            this.isNewItem = id === null || id === undefined;
            if(this.isNewItem){
                return  Observable.empty<Account>();
            }

            this.spinnerService.show("Cargando cuenta...");
            return this.accountsService.getAccount(+id);
        })
        .subscribe(account => {
            this.model = account;
            this.spinnerService.hide();
        });
    }

    saveChanges(): void {
        this.spinnerService.show("Guardando cambios...");
        if(this.isNewItem) {
            this.accountsService.addAccount(this.model).subscribe(r => this.onChangesCompleted(r));
        }
        else {
            this.accountsService.updateAccount(this.model).subscribe(r => this.onChangesCompleted(r));
        }
    }

    private onChangesCompleted(result: boolean): void {
        this.spinnerService.hide();
        const resultMessage = result ? "Cuenta guardada correctamente" : "No se pudo guardar la cuenta.";
        this.messageBoxService.show(resultMessage);
    }
}