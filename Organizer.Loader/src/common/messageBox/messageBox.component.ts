import { Component, Inject } from "@angular/core";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";
import { MessageBoxButtons } from "common/messageBox/messageBoxButtons";
import { MessageBoxIcon } from "common/messageBox/messageBoxIcon";
import { MessageBoxResult } from "common/messageBox/messageBoxResult";

@Component({
    moduleId: module.id,
    selector: "qsyerl",
    templateUrl: "messageBox.component.html"
})
export class MessageBoxComponent {

    buttonsEnum = MessageBoxButtons;
    iconEnum = MessageBoxIcon;
    resultEnum = MessageBoxResult;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private dialogRef: MdDialogRef<MessageBoxComponent>)
    {}

    private onMessageBoxButtonClick(messageBoxResult: MessageBoxResult): void {
        this.dialogRef.close(messageBoxResult);
    }
}