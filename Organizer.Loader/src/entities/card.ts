import { CardType } from "entities/cardType";
import { CardCompany } from "entities/cardCompany";

export class Card {
    public Id: number;
    public Type: CardType;
    public CompanyId: number;
    public Number: string;
    public Owner: string;
    public ExpirationDate: Date;
}