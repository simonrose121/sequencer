import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { StoryService } from './story.service';
import { UtilitiesService } from './utilities.service';

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
    public story;
    public firstCard;
    public a1 = [];
    public a2 = [];
    public a3 = [];
    public error = false;
    public finished = false;

    private currentStory = 0;
    private stories;
    private selectedCard = null;

    constructor(private storyService: StoryService, 
                private utilitiesService: UtilitiesService,
                private dragulaService: DragulaService) {

        dragulaService.setOptions('first-bag', {
            accepts: (el, target, source, sibling) => {
                return this.canMove(el, target, source, sibling);
            }
        });
    }

    ngOnInit() {
        this.stories = this.storyService.get();
        this.nextStory();
    }

    canMove(el, target, source, sibling) {
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

    nextStory() {
        if (typeof this.stories[this.currentStory] !== "undefined") {
            // get the first story
            this.story = this.stories[this.currentStory];
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

    submit() {
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
                this.currentStory++;
                this.nextStory();
            }
        }
        // change error flag back once animation is complete
        setTimeout(() => {
            this.error = false
        }, 1000);
    }
    
    setCurrent(card) {
        console.log(card);
        this.selectedCard = card;
        console.log(this.selectedCard);
    }
}