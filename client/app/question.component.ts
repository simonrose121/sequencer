import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { QuestionService } from './question.service';
import { UtilitiesService } from './utilities.service';
import { AnswerService } from './answer.service';
import { ConfigService } from './config.service';

import { Card } from './models/card';
import { Question } from './models/question';

@Component({
    selector: 'question',
    templateUrl: 'app/question.component.html',
    styleUrls: [
        'app/question.component.css',
    ]
})
export class QuestionComponent implements OnInit {
    stories: Question[];
    story: Question;
    card1: Card = null;
    card2: Card = null;
    card3: Card = null;
    card4: Card = null;
    error = false;
    finished = false;
    finalQuestion = false;
    activeStoryIndex = 0;
    activeHover: string = null;
    activeRemoveHover: string = null;
    activeCard: Card = null;
    timeLimit: number;
    id: number;
    demo: boolean;
    cardSet: number;

    constructor(private questionService: QuestionService,
                private answerService: AnswerService,
                private utilitiesService: UtilitiesService,
                private configService: ConfigService,
                private slimLoadingBarService: SlimLoadingBarService,
                private activatedRoute: ActivatedRoute) {

        this.id = answerService.getId();

        configService.getConfig().subscribe(config => {
            this.timeLimit = config.timeLimit;
            this.cardSet = config.cardSet;
        });
    }

    public ngOnInit(): void {
        // get query string
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.demo = params['demo'];
        });

        if (this.demo) {
            this.getDemoStory();
        } else {
            this.getStories();
            this.startTimer();
        }
    }

    private getDemoStory(): void {
        this.questionService.getStoriesData()
            .subscribe(data => {
                this.stories = data.stories.demoStory;
                // don't want to save this result in the database
                this.finalQuestion = true;
                this.nextStory();
            });
    }

    private getStories(): void {
        this.questionService.getStoriesData()
            .subscribe(data => {
                if (this.cardSet === 1) {
                    this.stories = this.utilitiesService.shuffle(data.stories.firstSet);
                } else {
                    this.stories = this.utilitiesService.shuffle(data.stories.secondSet);
                }
                this.nextStory();
            });
    }

    private nextStory(): void {
        if (typeof this.stories[this.activeStoryIndex] !== 'undefined') {
            // get the first story
            this.story = this.stories[this.activeStoryIndex];
            // save the first card
            this.card1 = this.story.cards[0];
            // remove the first card from the array`
            this.story.cards.shift();
            // randomly sort the rest of the cards
            this.story.cards = this.utilitiesService.shuffle(this.story.cards);
            this.utilitiesService.startTimer();
        } else {
            // display well done message
            this.finished = true;
        }
    }

    private submit(): void {
        if (this.card2 === null ||
            this.card3 === null ||
            this.card4 === null) {
            // change div colour in a transition
            this.error = true;
        } else {
            // create an answer array
            const answer = [ this.card2, this.card3, this.card4 ];
            if (answer.length === 3) {
                answer.unshift(this.card1);
                if (!this.finalQuestion) {
                    this.answerService.mark(this.story, answer).subscribe(data => {
                        console.log(data);
                    });
                    this.card2 = null;
                    this.card3 = null;
                    this.card4 = null;
                    this.activeStoryIndex++;
                    this.nextStory();
                } else {
                    this.finished = true;
                }
            }
        }
        // change error flag back once animation is complete
        setTimeout(() => {
            this.error = false;
        }, 1000);
    }

    // Timer
    private startTimer(): void {
        let value = 0;
        let percentage = 100;

        // capture this
        let t = this;

        // decrease timer every 100 milliseconds
        this.utilitiesService.interval(100, function() {
            // set new time
            value += 100;
            if (value == t.timeLimit) {
                // trigger test finish
                clearInterval(this);
                t.slimLoadingBarService.complete();
                t.finalQuestion = true;
            } else {
                // set percentage of bar
                const newPercentage = percentage - ((value / t.timeLimit) * percentage);
                t.slimLoadingBarService.progress = newPercentage;
            }
        });
    }

    // Click and click functionality
    private setActiveCard(card): void {
        this.activeCard = card;
    }

    private clickToAddOrRemove(pos): void {
        if (this.activeCard) {
            switch (pos) {
                case 'card2':
                    if (this.card2 === null) {
                        this.card2 = null;
                        this.card2 = this.activeCard;
                        this.removeCardFromOptions(this.activeCard);
                    }
                    break;
                case 'card3':
                    if (this.card3 === null) {
                        this.card3 = null;
                        this.card3 = this.activeCard;
                        this.removeCardFromOptions(this.activeCard);
                    }
                    break;
                case 'card4':
                    if (this.card4 === null) {
                        this.card4 = null;
                        this.card4 = this.activeCard;
                        this.removeCardFromOptions(this.activeCard);
                    }
                    break;
            }

            this.setActiveCard(null);
        } else {
            this.removeCard(pos);
        }
    }

    private removeCard(pos): void {
        switch (pos) {
            case 'card2':
                if (this.card2 !== null) {
                    this.story.cards.push(this.card2);
                    this.card2 = null;
                }
                break;
            case 'card3':
                if (this.card3 !== null) {
                    this.story.cards.push(this.card3);
                    this.card3 = null;
                }
                break;
            case 'card4':
                if (this.card4 !== null) {
                    this.story.cards.push(this.card4);
                    this.card4 = null;
                }
                break;
        }
    }

    private removeCardFromOptions(card): void {
        var index: number = this.story.cards.indexOf(card, 0);
        if (index > -1) {
            this.story.cards.splice(index, 1);
        }
    }

    private hover(pos): void {
        // handle if activeCard is selected
        if (this.activeCard) {
            // highlight cell
            switch (pos) {
                case 'card2':
                    this.activeHover = 'card2';
                    break;
                case 'card3':
                    this.activeHover = 'card3';
                    break;
                case 'card4':
                    this.activeHover = 'card4';
                    break;
            }
        } else {
            switch (pos) {
                case 'card2':
                    this.activeRemoveHover = 'card2';
                    break;
                case 'card3':
                    this.activeRemoveHover = 'card3';
                    break;
                case 'card4':
                    this.activeRemoveHover = 'card4';
                    break;
            }
        }
    }

    private unhover(): void {
        this.activeHover = null;
        this.activeRemoveHover = null;
    }
}
