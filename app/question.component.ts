import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { StoryService } from './story.service';

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
    public answer = [];
    public finished = false;

    private currentStory = 0;
    private stories;

    constructor(private storyService: StoryService) {}

    ngOnInit() {
        this.stories = this.storyService.get();
        this.nextStory();
    }

    submit() {
        if (this.answer.length === 3) {
            this.answer.unshift(this.firstCard);
            this.storyService.mark(this.story.id, this.answer);
            this.answer = [];
            this.currentStory++;
            this.nextStory();
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
            this.story.cards = this.randomOrder(this.story.cards);
        } else {
            // display well done message
            this.finished = true;
        }
    }

    randomOrder(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}