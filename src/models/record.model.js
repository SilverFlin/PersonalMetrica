
const { Schema, model, Types } = require('mongoose');

const HabitRecord = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
        required: true
    },

    habitCompletion: {
        type: Boolean,
        required: true
    }
})

const TimerRecord = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
        required: true
    },
    durationInSeconds: {
        type: Number,
        required: true
    }
})

const RecordSchema = new Schema({
    typeRecord: {
        type: String,
        enum: ['habit', 'timer'],
        required: true
    },
    records: [
        {
            type: Schema.Types.Mixed,
            required: true
        }
    ]

})
module.exports = {
    Record: model('Record', RecordSchema),
    HabitRecord,
    TimerRecord
}