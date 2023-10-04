const { Schema, model, Types } = require('mongoose');

const TrackerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
         required: true
    },
    typeTracker: {
        type: String,
        enum: ['habit', 'timer'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    creationTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    recordId: {
        type: Schema.Types.ObjectId
    }
})

const AccountSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    trackers: [
        {
            type: TrackerSchema,
            required: true
        }
    ]

})

module.exports =
{
    Account: model('Account', AccountSchema),
    Tracker: TrackerSchema
}