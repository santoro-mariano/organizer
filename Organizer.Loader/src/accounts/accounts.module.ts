import { NgModule } from "@angular/core";

import { CommonModule } from "common/common.module";

import { AccountListComponent } from "accounts/accountList.component";
import { AccountEditComponent } from "accounts/accountEdit.component";

import { AccountsService } from "accounts/accounts.service";

@NgModule({
    declarations: [
        AccountListComponent,
        AccountEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AccountListComponent,
        AccountEditComponent
    ],
    providers: [
        AccountsService
    ]
})
export class AccountsModule {}