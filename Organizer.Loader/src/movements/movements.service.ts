import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Movement } from "entities/movement";

import { SecureHttp } from "common/secureHttp";

@Injectable()
export class MovementsService {
    
    constructor(private http: SecureHttp) {
    }

    public getMovements(): Observable<Array<Movement>> {
        return this.http.get("Movements").map(r => {
            let response = r.json();
            return response.Result ? response.Data : [];
        });
    }

    public getMovement(movementId: number): Observable<Movement> {
        return this.http.get(`Movements/${movementId}`).map(r => {
            let response = r.json();
            return response.Result ? response.Data : {};
        });
    }

    public addMovement(movement: Movement): Observable<boolean> {
        return this.http.post("Movements", movement).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public updateMovement(movement: Movement): Observable<boolean> {
        return this.http.put("Movements", movement).map(r => {
            let response = r.json();
            return response.Result;
        });
    }

    public deleteMovement(movementId: number): Observable<boolean> {
        return this.http.delete(`Movements/${movementId}`).map(r => {
            let response = r.json();
            return response.Result;
        });
    }
}