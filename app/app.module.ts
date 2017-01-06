import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { StoryService } from './story.service';

@NgModule({
    imports: [
        BrowserModule,
        DragulaModule
    ],
    declarations: [
        AppComponent,
        QuestionComponent
    ],
    providers: [
        StoryService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
