import { Injectable, EventEmitter } from "@angular/core";
import { MdDialog } from '@angular/material';

import { ShowRequest } from "common/messageBox/showRequest";
import { MessageBoxButtons } from "common/messageBox/messageBoxButtons";
import { MessageBoxIcon } from "common/messageBox/messageBoxIcon";
import { MessageBoxComponent } from "common/messageBox/messageBox.component";
import { MessageBoxResult } from "common/messageBox/messageBoxResult";

import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageBoxService{

    constructor(private dialog: MdDialog){
    }

    public show(message: string, title: string = "", butttons = MessageBoxButtons.Ok, icon = MessageBoxIcon.None):
    Observable<MessageBoxResult> {
        return this.dialog.open(MessageBoxComponent, {data: new ShowRequest(title, message, icon, butttons)}).afterClosed();
    }
}