import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MdSidenav } from "@angular/material"

import { AuthenticationService } from "authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public authenticationService: AuthenticationService, private router: Router){
      this.authenticationService.loggedOut.subscribe(() => {
        this.router.navigate([""]);
      });
    }

    @ViewChild("rightSideNav")
    sideNav: MdSidenav;

    logout(): void {
      this.authenticationService.logout();
      this.sideNav.close();
    }
}
