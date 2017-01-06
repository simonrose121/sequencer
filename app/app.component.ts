import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css',
    ]
})
export class AppComponent { 
    id;

    constructor(private dataService: DataService) {}

    setId(id) {
        this.id = id;
        this.dataService.setId(id);
    }
}