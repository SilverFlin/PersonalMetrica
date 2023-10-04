import { Schema, model, Types } from 'mongoose';
import { AccountDTO, TrackerDTO } from '../types';

const TrackerSchema = new Schema<TrackerDTO>({
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
});

const AccountSchema = new Schema<AccountDTO>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trackers: [{
        type: TrackerSchema,
        required: true
    }]
});


const AccountModel = model('Account', AccountSchema)

export {
    AccountModel,
    TrackerSchema
}