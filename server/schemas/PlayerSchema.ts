import { Schema, model } from 'mongoose';

class PlayerSchema {
    static get schema() {
        var answerSchema = new Schema({
            questionId: {
                type: Number,
                required: true
            },
            typeId: {
                type: Number,
                required: true
            },
            score: {
                type: Number,
                required: true
            },
            dateTime: {
                type: Date,
                required: true
            },
            timeTaken: {
                type: Number,
                required: true
            }
        });

        var playerSchema = new Schema({
             playerId: {
                type: Number,
                required: true
            },
            answers: {
                type: [answerSchema]
            }
        });

        return playerSchema;
    }
}

export let schema = model<IPlayerModel>('player', PlayerSchema.schema, 'players', true);