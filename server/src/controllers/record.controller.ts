import { RecordListModel } from '../models/record.model'
import { RecordListDTO, HabitRecordDTO, TimerRecordDTO } from '../types'

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
    // 
    async insertRecord(query: RecordListQuery, data: any) {
        const record = await RecordListModel.findOne(query)
        //FIXME: validate data and if element was pushed  
        return new Promise((resolve, reject) => {
            if (!record) {
                reject(new Error('RecordList not found!'))
            } else {
                if (record.typeRecord === 'timer') {
                    const timerRecord: TimerRecordDTO = { durationInSeconds: data.durationInSeconds, creationTime: new Date() }
                    record.records.push(timerRecord)

                }
                if (record.typeRecord === 'habit') {
                    const habitRecord: HabitRecordDTO = { habitCompletion: data.habitCompletion, creationTime: new Date() }
                    record.records.push(habitRecord)
                }

                record.save().then(record => {
                    resolve(record)
                }).catch(err => {
                    reject(err)
                })

            }
        })
    }
}

export { RecordListController, RecordListQuery };