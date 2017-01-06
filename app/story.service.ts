export class StoryService {
    // public methods
    get() {
        return this.stories;
    }

    mark(cards) {
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

        console.log(mark);
    }

    stories = [
        {
            id: 0,
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
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ];
}
