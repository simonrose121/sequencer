import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { StoryService } from './story.service';
import { UtilitiesService } from './utilities.service';

import { Card } from './../../shared/models/card';
import { Story } from './../../shared/models/story';

@Component({
    selector: 'question',
    templateUrl: 'app/question.component.html',
    styleUrls: [
        'app/question.component.css',
        'dragula.min.css'
    ],
    viewProviders: [DragulaService]
})
export class QuestionComponent {
    private stories : Array<Story>;
    private story : Story;
    private firstCard : Card;
    private a1 : Array<Card> = [];
    private a2 : Array<Card> = [];
    private a3 : Array<Card> = [];
    private error : boolean = false;
    private finished : boolean = false;
    private activeStoryIndex : number = 0;
    private activeHover : string = null;
    private activeRemoveHover : string = null;
    private activeCard : Card = null;

    constructor(private storyService: StoryService, 
                private utilitiesService: UtilitiesService,
                private dragulaService: DragulaService) {

        dragulaService.setOptions('first-bag', {
            accepts: (el, target, source, sibling) => {
                return this.canMove(el, target, source, sibling);
            }
        });
    }

    private ngOnInit() {
        this.stories = this.storyService.get();
        this.nextStory();
    }

    private nextStory() {
        if (typeof this.stories[this.activeStoryIndex] !== "undefined") {
            // get the first story
            this.story = this.stories[this.activeStoryIndex];
            // save the first card
            this.firstCard = this.story.cards[0];
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

    private submit() {
        if (this.a1.length === 0 || this.a2.length === 0 || this.a3.length === 0) {
            // change div colour in a transition
            this.error = true;
        } else {
            // create an answer array
            const answer = [ this.a1[0], this.a2[0], this.a3[0] ];
            if (answer.length === 3) {
                answer.unshift(this.firstCard);
                this.storyService.mark(this.story, answer);
                this.a1 = [];
                this.a2 = [];
                this.a3 = [];
                this.activeStoryIndex++;
                this.nextStory();
            }
        }
        // change error flag back once animation is complete
        setTimeout(() => {
            this.error = false
        }, 1000);
    }

    

    // Dragular functions
    private canMove(el, target, source, sibling) {
        switch (target.id) {
            case "a1":
                return this.a1.length === 0;
            case "a2":
                return this.a2.length === 0;
            case "a3":
                return this.a3.length === 0;
            default:
                return true;
        }
    }

    // Click and click functionality
    private setActiveCard(card) {
        this.activeCard = card;
    }

    private clickToAddOrRemove(pos) {
        if (this.activeCard) {
            switch(pos) {
                case "a1":
                    if (this.a1.length === 0) {
                        this.a1 = [];
                        this.a1.push(this.activeCard);
                        this.removeCardFromOptions(this.activeCard);
                    }               
                    break;
                case "a2":
                    if (this.a2.length === 0) {
                        this.a2 = [];
                        this.a2.push(this.activeCard);
                        this.removeCardFromOptions(this.activeCard);
                    }       
                    break;
                case "a3":
                    if (this.a3.length === 0) {
                        this.a3 = [];
                        this.a3.push(this.activeCard);
                        this.removeCardFromOptions(this.activeCard);
                    }       
                    break;
            }

            this.setActiveCard(null);
        } else {
            this.removeCard(pos);
        }
    }

    private removeCard(pos) {
        switch(pos) {
            case "a1":
                if (this.a1.length > 0) {
                    this.story.cards.push(this.a1[0]);
                    this.a1 = [];
                }
                break;
            case "a2":
                if (this.a2.length > 0) {
                    this.story.cards.push(this.a2[0]);
                    this.a2 = [];
                }
                break;
            case "a3":
                if (this.a3.length > 0) {
                    this.story.cards.push(this.a3[0]);
                    this.a3 = [];
                }
                break;
        }
    }

    private removeCardFromOptions(card) {
        var index : number = this.story.cards.indexOf(card, 0);
        if (index > -1) {
            this.story.cards.splice(index, 1);
        }
    }

    private hover(pos) {
        // handle if activeCard is selected
        if (this.activeCard) {
            // highlight cell
            switch(pos) {
                case "a1":
                    this.activeHover = 'a1';
                    break;
                case "a2":
                    this.activeHover = 'a2';
                    break;
                case "a3":
                    this.activeHover = 'a3';
                    break;
            }
        } else {
            switch(pos) {
                case "a1":
                    this.activeRemoveHover = 'a1';
                    break;
                case "a2":
                    this.activeRemoveHover = 'a2';
                    break;
                case "a3":
                    this.activeRemoveHover = 'a3';
                    break;
            }
        }
    }

    private unhover() {
        this.activeHover = null;
        this.activeRemoveHover = null;
    }
}