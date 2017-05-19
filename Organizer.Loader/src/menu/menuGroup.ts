import { MenuItem } from "menu/menuItem";

export class MenuGroup {

    constructor(name: string){
        this.Name = name;
        this.Items = new Array<MenuItem>();
    }

    public Name: string;
    public Items: Array<MenuItem>;
}