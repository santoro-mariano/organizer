import { Component, Output, EventEmitter } from "@angular/core";
import { MenuGroup } from "menu/menuGroup";
import { MenuItem } from "menu/menuItem";

@Component({
    moduleId: module.id,
    selector: "menu",
    templateUrl: "menu.component.html"
})
export class MenuComponent {
    menuGroups: Array<MenuGroup>;

    constructor(){
        this.menuGroups = new Array<MenuGroup>();
        let currenciesGroup = new MenuGroup("Monedas");
        currenciesGroup.Items.push(new MenuItem("monetization_on", "Monedas cargadas", "/currencies"));
        currenciesGroup.Items.push(new MenuItem("attach_money", "Cargar nueva moneda","/currency"));
        this.menuGroups.push(currenciesGroup);
        let accountsGroup = new MenuGroup("Cuentas");
        accountsGroup.Items.push(new MenuItem("", "Cuentas cargadas", "/accounts"));
        accountsGroup.Items.push(new MenuItem("", "Crear nueva cuenta", "/account"));
        this.menuGroups.push(accountsGroup);
        let cardsGroup = new MenuGroup("Tarjetas");
        cardsGroup.Items.push(new MenuItem("", "Tarjetas cargadas", "/cards"));
        cardsGroup.Items.push(new MenuItem("", "Cargar nueva tarjeta", "/card"));
        this.menuGroups.push(cardsGroup);
        let entriesGroup = new MenuGroup("Movimientos");
        entriesGroup.Items.push(new MenuItem("", "Movimientos cargados", "/movements"));
        entriesGroup.Items.push(new MenuItem("", "Crear nuevo movimiento", "/movement"));
        this.menuGroups.push(entriesGroup);
    }

    @Output()
    navigate = new EventEmitter();
}