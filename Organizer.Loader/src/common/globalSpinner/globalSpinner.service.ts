import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class GlobalSpinnerService {

    private message_ = "";

    public showRequest = new EventEmitter<string>();
    public hideRequest = new EventEmitter();

    public isShowing = false;
    public get message(): string {
        return this.message_;
    }

    public show(message: string): void {
        if(this.isShowing){
            return;
        }

        this.message_ = message;
        this.isShowing = true;
        this.showRequest.emit(this.message_);
    }

    public hide(): void {
        if(!this.isShowing){
            return;
        }
        
        this.isShowing = false;
        this.hideRequest.emit();
    }
}