import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { StoryService } from './story.service';
import { LogService } from './log.service';
import { UtilitiesService } from './utilities.service';
import { ConfigService } from './config.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SlimLoadingBarModule.forRoot()
    ],
    declarations: [
        AppComponent,
        QuestionComponent
    ],
    providers: [
        StoryService,
        LogService,
        UtilitiesService,
        ConfigService
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        SlimLoadingBarModule
    ]
})
export class AppModule {}
