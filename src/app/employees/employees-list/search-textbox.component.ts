import { Component,OnInit } from "@angular/core";

@Component({
    selector : 'search-textBox',
    template :  `<label for = "search"> search ::</label><input type = "text"/> `
})
export class SearchTextComponent implements OnInit{

    constructor() {
        
    }
    ngOnInit():void{

    }
}