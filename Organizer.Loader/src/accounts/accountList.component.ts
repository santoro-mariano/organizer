import { Component, OnInit } from "@angular/core";

import { AccountsService } from "accounts/accounts.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";

import { Account } from "entities/account";

@Component({
    moduleId: module.id,
    templateUrl: "accountList.component.html"
})
export class AccountListComponent implements OnInit {

    private accounts: Array<Account>;

    constructor(private accountsService: AccountsService, private spinnerService: GlobalSpinnerService){
    }

    ngOnInit(): void {
        this.spinnerService.show("Cargando cuentas...");
        this.accountsService.getAccounts().subscribe(r => {
            this.accounts = r;
            this.spinnerService.hide();
        },e =>{},() => this.spinnerService.hide());
    }
}