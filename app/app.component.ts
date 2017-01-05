import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { StoryService } from './story.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css',
        'dragula.min.css'
    ],
    viewProviders: [DragulaService],
})
export class AppComponent { 
    story;

    constructor(private storyService: StoryService) {}

    ngOnInit() {
        const stories = this.storyService.get();
        this.story = stories[0];
    }
}