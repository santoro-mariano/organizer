import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { routes } from "app/app.routes";

import { CurrenciesModule } from "currencies/currencies.module";
import { MovementsModule } from "movements/movements.module";
import { AccountsModule } from "accounts/accounts.module";
import { CardsModule } from "cards/cards.module";
import { CommonModule } from "common/common.module";

import { AppComponent } from './app.component';
import { MenuComponent } from "menu/menu.component";
import { DashboardComponent } from "dashboard/dashboard.component";
import { AuthenticationComponent } from "authentication/authentication.component";
import { AuthenticationGuard } from "authentication/authentication.guard";
import { AuthenticationService } from "authentication/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AuthenticationComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CommonModule,
    CurrenciesModule,
    MovementsModule,
    AccountsModule,
    CardsModule
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
