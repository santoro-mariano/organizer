export class MenuItem {

    constructor(icon: string, text: string, uri: string){
        this.Icon = icon;
        this.Text = text;
        this.Uri = uri;
    }

    public Icon: string;
    public Text: string;
    public Uri: string;
}