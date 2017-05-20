import { Component, Output, EventEmitter } from "@angular/core";
import { MenuGroup } from "menu/menuGroup";
import { MenuItem } from "menu/menuItem";

@Component({
    moduleId: module.id,
    selector: "menu",
    templateUrl: "menu.component.html",
    styleUrls: ["menu.component.css"]
})
export class MenuComponent {
    menuGroups: Array<MenuGroup>;

    constructor(){
        this.menuGroups = new Array<MenuGroup>();
        let currenciesGroup = new MenuGroup("Monedas");
        currenciesGroup.Items.push(new MenuItem("view_list", "Monedas cargadas", "/currencies"));
        currenciesGroup.Items.push(new MenuItem("monetization_on", "Cargar nueva moneda","/currency"));
        this.menuGroups.push(currenciesGroup);
        let accountsGroup = new MenuGroup("Cuentas");
        accountsGroup.Items.push(new MenuItem("view_list", "Cuentas cargadas", "/accounts"));
        accountsGroup.Items.push(new MenuItem("account_balance", "Crear nueva cuenta", "/account"));
        this.menuGroups.push(accountsGroup);
        let cardsGroup = new MenuGroup("Tarjetas");
        cardsGroup.Items.push(new MenuItem("view_list", "Compañías de tarjetas cargadas", "/cardCompanies"));
        cardsGroup.Items.push(new MenuItem("credit_card", "Cargar nueva compañía de tarjetas", "/cardCompany"));
        cardsGroup.Items.push(new MenuItem("view_list", "Tarjetas cargadas", "/cards"));
        cardsGroup.Items.push(new MenuItem("credit_card", "Cargar nueva tarjeta", "/card"));
        this.menuGroups.push(cardsGroup);
        let entriesGroup = new MenuGroup("Movimientos");
        entriesGroup.Items.push(new MenuItem("view_list", "Movimientos cargados", "/movements"));
        entriesGroup.Items.push(new MenuItem("compare_arrows", "Crear nuevo movimiento", "/movement"));
        this.menuGroups.push(entriesGroup);
    }

    @Output()
    navigate = new EventEmitter();
}