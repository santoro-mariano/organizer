import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Currency } from "entities/currency";

import { SecureHttp } from "common/secureHttp";

@Injectable()
export class CurrenciesService {
    
    constructor(private http: SecureHttp) {
    }

    public getCurrencies(): Observable<Array<Currency>> {
        return this.http.get("Currencies").map(r => {
            let response = r.json();
            return response.Result ? response.Data : [];
        });
    }

    public getCurrency(currencyId: number): Observable<Currency> {
        return this.http.get(`Currencies/${currencyId}`).map(r => {
            let response = r.json();
            return response.Result ? response.Data : {};
        });
    }

    public addCurrency(currency: Currency): Observable<boolean> {
        return this.http.post("Currencies", currency).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public updateCurrency(currency: Currency): Observable<boolean> {
        return this.http.put("Currencies", currency).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public deleteCurrency(currencyId: number): Observable<boolean> {
        return this.http.delete(`Currencies/${currencyId}`).map(r => {
            let response = r.json();
            return response.Result;
        });
    }
}