import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class StoryService {

    constructor(private dataService: DataService) {}

    // public methods
    get() {
        return this.stories;
    }

    mark(story, cards) {
        /* logic for this:
          Correct sequence - 2 points
          Correct beginning and end - 1 point
          Incorrect sequence - 0 points
        */
        let mark;
        if ((cards[0].pos === 1) &&
            (cards[1].pos === 2) &&
            (cards[2].pos === 3) &&
            (cards[3].pos === 4)) {
            mark = 2;
        } else if ((cards[0].pos === 1) && (cards[3].pos === 4)) {
            mark = 1;
        } else {
            mark = 0;
        }

        this.dataService.storeMark(story, mark);
    }

    stories = [
        {
            action: 'Kicking ball in to river',
            type: 'Mechanical 2',
            cards: [
                {
                    pos: 1,
                    img: '0/1'
                },
                {
                    pos: 2,
                    img: '0/2'
                },
                {
                    pos: 3,
                    img: '0/3'
                },
                {
                    pos: 4,
                    img: '0/4'
                }
            ]
        },
        {
            action: 'Stealing toy train',
            type: 'Behavioural 2',
            cards: [
                {
                    pos: 1,
                    img: '1/1'
                },
                {
                    pos: 2,
                    img: '1/2'
                },
                {
                    pos: 3,
                    img: '1/3'
                },
                {
                    pos: 4,
                    img: '1/4'
                }
            ]
        },
        {
            action: 'Taking ice cream',
            type: 'Behavioural 2',
            cards: [
                {
                    pos: 1,
                    img: '2/1'
                },
                {
                    pos: 2,
                    img: '2/2'
                },
                {
                    pos: 3,
                    img: '2/3'
                },
                {
                    pos: 4,
                    img: '2/4'
                }
            ]
        },
        {
            action: 'Going to bed',
            type: 'Behavioural 1',
            cards: [
                {
                    pos: 1,
                    img: '3/1'
                },
                {
                    pos: 2,
                    img: '3/2'
                },
                {
                    pos: 3,
                    img: '3/3'
                },
                {
                    pos: 4,
                    img: '3/4'
                }
            ]
        },
        {
            action: 'Planting flowers',
            type: 'Mechanical 2',
            cards: [
                {
                    pos: 1,
                    img: '4/1'
                },
                {
                    pos: 2,
                    img: '4/2'
                },
                {
                    pos: 3,
                    img: '4/3'
                },
                {
                    pos: 4,
                    img: '4/4'
                }
            ]
        },
        {
            name: 'Winning a race',
            type: 'Behavioural 1',
            cards: [
                {
                    pos: 1,
                    img: '5/1'
                },
                {
                    pos: 2,
                    img: '5/2'
                },
                {
                    pos: 3,
                    img: '5/3'
                },
                {
                    pos: 4,
                    img: '5/4'
                }
            ]
        },
        {
            name: 'Builing a snowman',
            type: 'Behavioural 2',
            cards: [
                {
                    pos: 1,
                    img: '6/1'
                },
                {
                    pos: 2,
                    img: '6/2'
                },
                {
                    pos: 3,
                    img: '6/3'
                },
                {
                    pos: 4,
                    img: '6/4'
                }
            ]
        },
        {
            name: 'Log falling off waterfall',
            type: 'Mechanical 1',
            cards: [
                {
                    pos: 1,
                    img: '7/1'
                },
                {
                    pos: 2,
                    img: '7/2'
                },
                {
                    pos: 3,
                    img: '7/3'
                },
                {
                    pos: 4,
                    img: '7/4'
                }
            ]
        },
        {
            name: 'Taking bear when not looking',
            type: 'Intentional',
            cards: [
                {
                    pos: 1,
                    img: '8/1'
                },
                {
                    pos: 2,
                    img: '8/2'
                },
                {
                    pos: 3,
                    img: '8/3'
                },
                {
                    pos: 4,
                    img: '8/4'
                }
            ]
        },
    ];
}
