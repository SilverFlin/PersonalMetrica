const {Record} = require('../models/record.model.js')
/**
 * 
 */
class RecordController {
    constructor() {

    }

    /**
     * 
     * @param {*} data 
     */
    async createRecord(data) {
        const newRecord = await new Record(data).save()
        if (newRecord) {
            // return
        }
    }
    /**
     * 
     * @param {*} query 
     * @param {*} data 
     */
    async updateRecord(query, data) {

        const updateRecord = await Record.findOneAndUpdate(query, data)
        if (updateRecord) {
            // return
        }
    }
    /**
     * 
     * @param {*} query 
     */
    async findRecord(query) {
        await Record.findOne(query)
    }
    /**
     * 
     * @param {*} query 
     */
    async deleteRecord(query) {
        await Record.findOneAndDelete(query)
    }



}

module.exports =RecordController;