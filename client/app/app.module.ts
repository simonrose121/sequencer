import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { StoryService } from './story.service';
import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';

@NgModule({
    imports: [
        BrowserModule,
        DragulaModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        QuestionComponent
    ],
    providers: [
        StoryService,
        DataService,
        UtilitiesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
