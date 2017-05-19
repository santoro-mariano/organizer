import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "common/pageNotFound/pageNotFound.component";

import { AuthenticationComponent } from "authentication/authentication.component";
import { DashboardComponent } from "dashboard/dashboard.component";
import { CurrencyListComponent } from "currencies/currencyList.component";
import { AccountListComponent } from "accounts/accountList.component";
import { CardListComponent } from "cards/cardList.component";
import { MovementListComponent } from "movements/movementList.component";
import { MovementEditComponent } from "movements/movementEdit.component";
import { CurrencyEditComponent } from "currencies/currencyEdit.component";
import { AccountEditComponent } from "accounts/accountEdit.component";
import { CardEditComponent } from "cards/cardEdit.component";

import { AuthenticationGuard } from "authentication/authentication.guard";

export const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "login", component: AuthenticationComponent },
    { path: "dashboard", canActivate: [AuthenticationGuard], component: DashboardComponent },
    { path: "currencies", canActivate: [AuthenticationGuard], component: CurrencyListComponent },
    { path: "currency", canActivate: [AuthenticationGuard], component: CurrencyEditComponent },
    { path: "currency/:currencyId", canActivate: [AuthenticationGuard], component: CurrencyEditComponent },
    { path: "accounts", canActivate: [AuthenticationGuard], component: AccountListComponent },
    { path: "account", canActivate: [AuthenticationGuard], component: AccountEditComponent },
    { path: "account/:accountId", canActivate: [AuthenticationGuard], component: AccountEditComponent },
    { path: "cards", canActivate: [AuthenticationGuard], component: CardListComponent },
    { path: "card", canActivate: [AuthenticationGuard], component: CardEditComponent },
    { path: "card/:cardId", canActivate: [AuthenticationGuard], component: CardEditComponent },
    { path:"movements", canActivate: [AuthenticationGuard], component: MovementListComponent },
    { path: "movement", canActivate: [AuthenticationGuard], component: MovementEditComponent },
    { path: "movement/:movementId", canActivate: [AuthenticationGuard], component: MovementEditComponent },
    { path: "**", canActivate: [AuthenticationGuard], component: PageNotFoundComponent }
];