import { Injectable } from "@angular/core";

import { SecureHttp } from "common/secureHttp";

import { Observable } from "rxjs/Observable";

import { Account } from "entities/account";

@Injectable()
export class AccountsService {

    constructor(private http: SecureHttp) {
    }

    public getAccounts(): Observable<Array<Account>> {
        return this.http.get("Accounts").map(r => {
            let response = r.json();
            return response.Result ? response.Data : [];
        });
    }

    public getAccount(accountId: number): Observable<Account> {
        return this.http.get(`Accounts/${accountId}`).map(r => {
            let response = r.json();
            return response.Result ? response.Data : {};
        });
    }

    public addAccount(account: Account): Observable<boolean> {
        return this.http.post("Accounts", account).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public updateAccount(account: Account): Observable<boolean> {
        return this.http.put("Accounts", account).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public deleteAccount(accountId: number): Observable<boolean> {
        return this.http.delete(`Accounts/${accountId}`).map(r => {
            let response = r.json();
            return response.Result;
        });
    }
}