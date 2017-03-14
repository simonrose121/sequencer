import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';

import { Card } from './../../shared/models/card';
import { Story } from './../../shared/models/story';

@Injectable()
export class StoryService {

    constructor(private dataService: DataService,
                private utilitiesService: UtilitiesService) {}

    // public methods
    public get() : Array<Story> {
        return this.utilitiesService.shuffle(this.stories);
    }

    mark(story : Story, cards : Array<Card>) {
        /* logic for this:
          Correct sequence - 2 points
          Correct beginning and end - 1 point
          Incorrect sequence - 0 points
        */
        let mark;
        if ((cards[0].position === 1) &&
            (cards[1].position === 2) &&
            (cards[2].position === 3) &&
            (cards[3].position === 4)) {
            mark = 2;
        } else if ((cards[0].position === 1) && (cards[3].position === 4)) {
            mark = 1;
        } else {
            mark = 0;
        }

        this.dataService.storeMark(story, mark);
    }

    // TODO: Remove these and pull from server instead
    stories : Array<Story> = [
        {
            action: 'Kicking ball in to river',
            type: 'Mechanical 2',
            cards: [
                {
                    position: 1,
                    imageUrl: '0/1'
                },
                {
                    position: 2,
                    imageUrl: '0/2'
                },
                {
                    position: 3,
                    imageUrl: '0/3'
                },
                {
                    position: 4,
                    imageUrl: '0/4'
                }
            ]
        },
        {
            action: 'Stealing toy train',
            type: 'Behavioural 2',
            cards: [
                {
                    position: 1,
                    imageUrl: '1/1'
                },
                {
                    position: 2,
                    imageUrl: '1/2'
                },
                {
                    position: 3,
                    imageUrl: '1/3'
                },
                {
                    position: 4,
                    imageUrl: '1/4'
                }
            ]
        },
        {
            action: 'Taking ice cream',
            type: 'Behavioural 2',
            cards: [
                {
                    position: 1,
                    imageUrl: '2/1'
                },
                {
                    position: 2,
                    imageUrl: '2/2'
                },
                {
                    position: 3,
                    imageUrl: '2/3'
                },
                {
                    position: 4,
                    imageUrl: '2/4'
                }
            ]
        },
        {
            action: 'Going to bed',
            type: 'Behavioural 1',
            cards: [
                {
                    position: 1,
                    imageUrl: '3/1'
                },
                {
                    position: 2,
                    imageUrl: '3/2'
                },
                {
                    position: 3,
                    imageUrl: '3/3'
                },
                {
                    position: 4,
                    imageUrl: '3/4'
                }
            ]
        },
        {
            action: 'Planting flowers',
            type: 'Mechanical 2',
            cards: [
                {
                    position: 1,
                    imageUrl: '4/1'
                },
                {
                    position: 2,
                    imageUrl: '4/2'
                },
                {
                    position: 3,
                    imageUrl: '4/3'
                },
                {
                    position: 4,
                    imageUrl: '4/4'
                }
            ]
        },
        {
            action: 'Winning a race',
            type: 'Behavioural 1',
            cards: [
                {
                    position: 1,
                    imageUrl: '5/1'
                },
                {
                    position: 2,
                    imageUrl: '5/2'
                },
                {
                    position: 3,
                    imageUrl: '5/3'
                },
                {
                    position: 4,
                    imageUrl: '5/4'
                }
            ]
        },
        {
            action: 'Builing a snowman',
            type: 'Behavioural 2',
            cards: [
                {
                    position: 1,
                    imageUrl: '6/1'
                },
                {
                    position: 2,
                    imageUrl: '6/2'
                },
                {
                    position: 3,
                    imageUrl: '6/3'
                },
                {
                    position: 4,
                    imageUrl: '6/4'
                }
            ]
        },
        {
            action: 'Log falling off waterfall',
            type: 'Mechanical 1',
            cards: [
                {
                    position: 1,
                    imageUrl: '7/1'
                },
                {
                    position: 2,
                    imageUrl: '7/2'
                },
                {
                    position: 3,
                    imageUrl: '7/3'
                },
                {
                    position: 4,
                    imageUrl: '7/4'
                }
            ]
        },
        {
            action: 'Taking bear when not looking',
            type: 'Intentional',
            cards: [
                {
                    position: 1,
                    imageUrl: '8/1'
                },
                {
                    position: 2,
                    imageUrl: '8/2'
                },
                {
                    position: 3,
                    imageUrl: '8/3'
                },
                {
                    position: 4,
                    imageUrl: '8/4'
                }
            ]
        },
    ];
}
