import { RecordListModel } from '../models/record.model'
import { RecordListDTO } from '../types'

interface RecordListQuery {
    _id: string | null;
}


class RecordListController {
    constructor() { }


    async createRecord(data: RecordListDTO): Promise<RecordListDTO> {
        const newRecord = await new RecordListModel(data).save()

        return new Promise((resolve, reject) => {
            if (newRecord) {
                resolve(newRecord)
            } else {
                reject(new Error('Error creating record'))
            }
        })
    }


    async updateRecord(query: RecordListQuery, data: RecordListDTO): Promise<RecordListDTO> {
        const updateRecord = await RecordListModel.findOneAndUpdate(query, data)
        return new Promise((resolve, reject) => {
            if (updateRecord) {
                resolve(updateRecord)
            } else {
                reject(new Error('Error updating record'))
            }

        })
    }

    async findRecord(query: RecordListQuery): Promise<RecordListDTO | null> {
        const recordFound = await RecordListModel.findOne(query)
        return new Promise((resolve, reject) => {
            if (recordFound) {
                resolve(recordFound)
            } else {
                reject(new Error('Error finding record'))
            }
        })
    }

    async deleteRecord(query: RecordListQuery) {
        const deletedRecord = await RecordListModel.findOneAndDelete(query)
        return new Promise((resolve, reject) => {
            if (deletedRecord) {
                resolve(deletedRecord)
            } else {
                reject(new Error('Error deleting record'))
            }
        })
    }
}

export { RecordListController, RecordListQuery };