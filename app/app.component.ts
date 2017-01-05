import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { CardService } from './cards.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ],
    viewProviders: [DragulaService],
})
export class AppComponent { 
    cards;

    constructor(private cardsService: CardService) {}

    ngOnInit() {
        this.cards = this.cardsService.get();
    }
}