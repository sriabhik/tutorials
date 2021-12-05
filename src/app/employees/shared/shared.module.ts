import { NgModule } from "@angular/core";
import {CapitializePipe} from './captialize.pipe'
@NgModule({
    declarations: [CapitializePipe],
    exports : [CapitializePipe]
})

export class SharedModule{
    
}