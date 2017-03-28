import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { StoryService } from './story.service';
import { UtilitiesService } from './utilities.service';
import { LogService } from './log.service';

import { Card } from './models/card';
import { Story } from './models/story';

@Component({
    selector: 'question',
    templateUrl: 'app/question.component.html',
    styleUrls: [
        'app/question.component.css',
        'dragula.min.css'
    ],
    viewProviders: [DragulaService]
})
export class QuestionComponent implements OnInit {
    mode = 'Observable';
    stories : Story[];
    story : Story;
    firstCard : Card;
    a1 = [];
    a2 = [];
    a3 = [];
    error : boolean = false;
    finished : boolean = false;
    activeStoryIndex : number = 0;
    activeHover : string = null;
    activeRemoveHover : string = null;
    activeCard : Card = null;

    constructor(private storyService: StoryService, 
                private logService: LogService,
                private utilitiesService: UtilitiesService,
                private dragulaService: DragulaService) {

        // dragulaService.setOptions('first-bag', {
        //     accepts: (el, target, source, sibling) => {
        //         let accepted = this.canMove(el, target, source, sibling);
        //         console.log('accepted ' + accepted);
        //         console.log('target ' + target);
                
        //         return accepted;
        //     }
        // });
    }

    ngOnInit() : void {
        this.getStories();
    }

    getStories() : void {
        this.storyService.getStories()
            .subscribe(stories => {
                this.stories = stories;
                this.nextStory();
            });
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
                this.logService.mark(this.story, answer).subscribe(data => {
                    console.log(data);
                })
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
        console.log('checking can move:' + target.id);
        
        switch (target.id) {
            case "a1":
                console.log(this.a1.length);
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
        console.log('clicked to add or remove');
        
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
        console.log('hovering...');
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