export class StoryService {
    // public methods
    get() {
        return this.stories;
    }

    stories = [
        {
            id: 1,
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
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        }
    ];
}
