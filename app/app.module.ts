import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { CardService } from './cards.service';

@NgModule({
    imports: [
        BrowserModule,
        DragulaModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        CardService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
