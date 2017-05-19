import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationModel } from "authentication/authentication.model";
import { AuthenticationService } from "authentication/authentication.service";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxService } from "common/messageBox/messageBox.service";

@Component({
    moduleId: module.id,
    selector: "authentication",
    templateUrl: "authentication.component.html"
})
export class AuthenticationComponent {

    model = new AuthenticationModel();

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                private spinner: GlobalSpinnerService,
                private messageBox: MessageBoxService) {
        if (this.authenticationService.isLogged) {
            this.router.navigate([""]);
        }
    }

    login(): void {
        this.spinner.show("Verificando identidad...");
        this.authenticationService.login(this.model.User, this.model.Password).subscribe(r => {
            this.spinner.hide();
            if(r){
                this.router.navigate([""]);
            }
            else{
                this.messageBox.show("Datos de autenticación inválidos");
            }
        });
    }
}