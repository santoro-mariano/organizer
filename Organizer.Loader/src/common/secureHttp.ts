import { Injectable } from "@angular/core";
import { Http, Response, RequestOptionsArgs, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { AuthenticationService } from "authentication/authentication.service";
import { GlobalConfigService } from "common/globalConfig.service";

@Injectable()
export class SecureHttp {
    constructor(private http: Http,
                private authenticationService: AuthenticationService,
                private globalConfigService: GlobalConfigService) {
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(`${this.globalConfigService.webApiUrlFullPrefix}/${url}`,
                                this.authenticationService.injectTokenHeader(options)).catch(error => {
                                    if (error.status === 401) {
                                        this.authenticationService.logout();
                                    }

                                    return Observable.empty();
                                });
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(`${this.globalConfigService.webApiUrlFullPrefix}/${url}`, body,
                                 this.authenticationService.injectTokenHeader(options)).catch(error => {
                                    if (error.status === 401) {
                                        this.authenticationService.logout();
                                    }

                                    return Observable.empty();
                                });
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(`${this.globalConfigService.webApiUrlFullPrefix}/${url}`, body,
                                this.authenticationService.injectTokenHeader(options)).catch(error => {
                                    if (error.status === 401) {
                                        this.authenticationService.logout();
                                    }

                                    return Observable.empty();
                                });
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(`${this.globalConfigService.webApiUrlFullPrefix}/${url}`,
                                   this.authenticationService.injectTokenHeader(options)).catch(error => {
                                    if (error.status === 401) {
                                        this.authenticationService.logout();
                                    }

                                    return Observable.empty();
                                });
    }
}