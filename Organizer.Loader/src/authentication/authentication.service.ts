import { Injectable, EventEmitter } from "@angular/core";
import { Http, URLSearchParams, RequestOptionsArgs, Headers } from "@angular/http";

import { GlobalConfigService } from "common/globalConfig.service";

import { User } from "entities/user";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

    static test = 0;
    mytest: number;

    constructor(private http: Http, private globalConfig: GlobalConfigService) {
        this.mytest = AuthenticationService.test++;
        this.isLogged = !!this.userToken;
        if (this.isLogged) {
            this.updateLoggedUser();
        }
    }

    public isLogged: boolean;

    public loggedUser: User;

    public loggedOut = new EventEmitter();

    public get userToken(): string {
        return localStorage.getItem("userToken");
    }

    public login(user: string, password: string): Observable<boolean> {
        const requestBody = new URLSearchParams();
        requestBody.set("username", user);
        requestBody.set("password", password);
        requestBody.set("grant_type", "password");
        return this.http.post(`${this.globalConfig.webApiUrlPrefix}/Token`, requestBody)
        .map(r => {
            const response = r.json();
            localStorage.setItem("userToken", `${response.token_type} ${response.access_token}`);
            this.isLogged = true;
            this.updateLoggedUser();
            return true;
        })
        .catch(e => {
            return Observable.of(false);
        });
    }

    public logout(): void {
        if(!!this.userToken) {
            this.http.post(`${this.globalConfig.webApiUrlFullPrefix}/Account/Logout`, {}, this.injectTokenHeader()).subscribe(r => {
                this.loggedUser = undefined;
                this.isLogged = false;
                localStorage.removeItem("userToken");
                this.loggedOut.emit();
            });
        }
        else {
            this.loggedUser = undefined;
            this.isLogged = false;
            this.loggedOut.emit();
        }
    }

    public injectTokenHeader(options?: RequestOptionsArgs): RequestOptionsArgs {
        options = options || {};
        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.append("Authorization", this.userToken);
        return options;
    }

    private updateLoggedUser(): void {
        if (!this.userToken) {
            this.loggedUser = undefined;
            return;
        }

        this.http.get(`${this.globalConfig.webApiUrlFullPrefix}/Account/UserInfo`, this.injectTokenHeader())
        .subscribe(r => {
            const response = r.json();
            const user = new User();
            user.Email = response.Email;
            this.loggedUser = user;
        }, error => {
            if(error.status === 401){
                this.loggedUser = undefined;
                this.isLogged = false;
                localStorage.removeItem("userToken");
                this.loggedOut.emit();
            }
        });
    }
}