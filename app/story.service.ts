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
                    pos: 1
                },
                {
                    pos: 2
                },
                {
                    pos: 3
                },
                {
                    pos: 4
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
