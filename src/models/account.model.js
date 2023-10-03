const { Schema,model } = require('mongoose');

const AccountSchema = Schema({
    email: {
        type: String,
        require: true
    },
    trackers: [
        {
            _id: {
                type: Schema.Types.ObjectId
                , require: true
            },
            typeTracker: {
                type: String,
                enum: ['habit', 'timer'],
                require: true
            },
            name: {
                type: String,
                require: true
            },
            creationTime: {
                type: Date,
                require: true,
                default: Date.now()
            },
            recordsId: {
                type: Schema.Types.ObjectId,
                require: true
            }
        }
    ]

})

module.exports.Account = model('Account', AccountSchema)