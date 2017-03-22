import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css',
    ]
})
export class AppComponent { 
    id = 1; // TODO: Change me back

    constructor(private logService: LogService) {}

    setId(id) {
        this.id = id;
        this.logService.setId(id);
    }
}