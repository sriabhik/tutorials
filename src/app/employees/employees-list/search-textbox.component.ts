import { Component,OnInit,Input, Output } from "@angular/core";
import  {EventEmitter} from "@angular/core"
@Component({
    selector : 'search-textBox',
    template :  `Search:  <input type ='text' [(ngModel)] = "filter"/> `
})
export class SearchTextComponent implements OnInit{
    private _filter!:string;
    @Input() get filter(){
        return this._filter;
    }
    set filter (val:string){
        this._filter = val;
        this.changed.emit(this.filter);
    }
    @Output() changed: EventEmitter<string> = new EventEmitter<string>()
    constructor() {
        
    }
    ngOnInit():void{

    }
}