import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from "./question.component";
import { ScoresComponent } from './scores.component';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';
import { UtilitiesService } from './utilities.service';
import { ConfigService } from './config.service';

const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/quiz', 
        pathMatch: 'full'
    },
    { 
        path: 'quiz', 
        component: QuizComponent 
    },
    { 
        path: 'scores', 
        component: ScoresComponent 
    }
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        QuizComponent,
        ScoresComponent,
        QuestionComponent
    ],
    providers: [
        QuestionService,
        AnswerService,
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
