import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable()
export class GlobalConfigService {

    constructor() {
        this.domainUrl = environment.production ? "https://myorganizeronline.com" : "http://localhost:4200";
        this.webApiUrlPrefix = `${this.domainUrl}`;
        this.webApiUrlFullPrefix = `${this.webApiUrlPrefix}/api`;
    }

    public domainUrl: string;

    public webApiUrlPrefix: string;

     public webApiUrlFullPrefix: string;
}