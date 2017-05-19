import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AuthenticationService } from "authentication/authentication.service";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.authenticationService.isLogged) {
            this.router.navigate(["/login"]);
        }
        return this.authenticationService.isLogged;
    }

}