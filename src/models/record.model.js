
const { Schema,model } = require('mongoose');


const RecordSchema = Schema({
    typeRecord: {
        type: String,
        enum: ['habit', 'timer'],
        require: true
    },
    records: [
        {
            _id: { type: Schema.Types.ObjectId }
            ///
        }
    ]

})
module.exports.Record = model('Record', RecordSchema)