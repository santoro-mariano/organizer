import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Card } from "entities/card";
import { CardCompany } from "entities/cardCompany";

import { SecureHttp } from "common/secureHttp";

@Injectable()
export class CardsService {

    constructor(private http: SecureHttp) {
    }

    public getCards(): Observable<Array<Card>> {
        return this.http.get("Cards").map(r => {
            let response = r.json();
            return response.Result ? response.Data : [];
        });
    }

    public getCard(cardId: number): Observable<Card> {
        return this.http.get(`Cards/${cardId}`).map(r => {
            let response = r.json();
            return response.Result ? response.Data : {};
        });
    }

    public addCard(card: Card): Observable<boolean> {
        return this.http.post("Cards", card).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public updateCard(card: Card): Observable<boolean> {
        return this.http.put("Cards", card).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public deleteCard(cardId: number): Observable<boolean> {
        return this.http.delete(`Cards/${cardId}`).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public getCardCompanies(): Observable<Array<CardCompany>> {
        return this.http.get("Cards/Companies").map(r => {
            let response = r.json();
            return response.Result ? response.Data : [];
        });
    }

    public getCardCompany(cardCompanyId: number): Observable<CardCompany> {
        return this.http.get(`Cards/Companies/${cardCompanyId}`).map(r => {
            let response = r.json();
            return response.Result ? response.Data : {};
        });
    }

    public addCardCompany(cardCompany: CardCompany): Observable<boolean> {
        return this.http.post("Cards/Companies", cardCompany).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public updateCardCompany(cardCompany: CardCompany): Observable<boolean> {
        return this.http.put("Cards/Companies", cardCompany).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public deleteCardCompany(cardCompanyId: number): Observable<boolean> {
        return this.http.delete(`Cards/Companies/${cardCompanyId}`).map(r => {
            let response = r.json();
            return response.Result;
        });
    }
}