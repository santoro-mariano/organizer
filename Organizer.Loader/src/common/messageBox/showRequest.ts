import { MessageBoxIcon } from "common/messageBox/messageBoxIcon";
import { MessageBoxButtons } from "common/messageBox/messageBoxButtons";

export class ShowRequest {

    constructor(title: string, message: string, icon: MessageBoxIcon, buttons: MessageBoxButtons){
        this.Title = title;
        this.Message = message;
        this.Icon = icon;
        this.Buttons = buttons;
    }

    public Title: string;
    public Message: string;
    public Icon: MessageBoxIcon;
    public Buttons: MessageBoxButtons;
}