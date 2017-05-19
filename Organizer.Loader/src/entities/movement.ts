import { MovementType } from "entities/movementType";
import { Currency } from "entities/currency";
import { Account } from "entities/account";
import { MovementOrigin } from "entities/movementOrigin";

export class Movement {
    public Id: number;
    public Type: MovementType;
    public Origin: MovementOrigin;
    public OriginAccountId: number;
    public Description: string;
    public CurrencyId: number;
    public Amount: number;
    public Date: Date;
}