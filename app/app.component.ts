import { Component } from '@angular/core';

import { CardService } from './cards.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ]
})
export class AppComponent { 
    cards;

    constructor(private cardsService: CardService) {}

    ngOnInit() {
        this.cards = this.cardsService.get();
    }
}