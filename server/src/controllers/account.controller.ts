import { AccountDTO, TrackerDTO } from "../types"

import { AccountModel, TrackerSchema } from '../models/account.model'
import { BadRequest } from "../exceptions/Errors";
import * as encryptor from "../auth/encryptor"
import { Types } from "mongoose";
import { RecordListModel } from "../models/record.model";

interface AccountQuery {
    _id?: string;
    email?: string;
}


class AccountController {
    constructor() { }

    async createAccount(data: AccountDTO): Promise<AccountDTO> {
        data.password = await encryptor.encrypt(data.password);
        const newAccount = await new AccountModel(data).save();
        return new Promise((resolve, reject) => {
            if (newAccount) {
                resolve(newAccount);
            } else {
                reject(new Error('Error creating account'));
            }
        })

    }

    async updateAccount(query: AccountQuery, data: AccountDTO): Promise<AccountDTO> {
        const updateAccount = await AccountModel.findOneAndUpdate(query, data)

        return new Promise((resolve, reject) => {
            if (updateAccount) {
                resolve(updateAccount);
            } else {
                reject(new Error('Error updating account'));
            }
        })



    }

    async findAccount(query: AccountQuery): Promise<AccountDTO> {
        const accountFound = await AccountModel.findOne(query)

        return new Promise((resolve, reject) => {
            if (accountFound) {
                resolve(accountFound);
            } else {
                reject(new Error('Error finding account'));
            }
        })
    }

    async deleteAccount(query: AccountQuery): Promise<AccountDTO | null> {
        const deletedAccount = await AccountModel.findOneAndDelete(query)

        return new Promise((resolve, reject) => {
            if (deletedAccount) {
                resolve(deletedAccount);
            } else {
                reject(new Error('Error deleting account'));
            }
        })
    }

    async createTracker(query: AccountQuery, data: TrackerDTO): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
<<<<<<< HEAD
        // if not set _id, the _id is repeated of the lasts trackers, before of this commit _id has been created correctly 
        data._id = new Types.ObjectId();
=======
        let recordList = await new RecordListModel({ typeRecord: data.typeTracker, records: [] }).save()
        data.recordId = recordList._id
>>>>>>> e0b8619 (feat: update date on records)

        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
            } else {
                account.trackers.push(data);
                account.save().then((account) => {
                    resolve(account)
                }).catch((error) => {
                    reject(error)
                })
            }
        })
    }

    async updateTracker(query: AccountQuery, idTracker: string, data: TrackerDTO): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
                return;
            }
            const updateTracker = account.trackers.find(e =>
                e._id?.equals(new Types.ObjectId(idTracker))
            );
            if (!updateTracker) {
                reject(new Error('Tracker not found'))
                return;
            }

            if (data.name) {
                updateTracker.name = data.name
            }
            if (data.recordId) {
                updateTracker.recordId = data.recordId
            }

            account.save()
                .then((account) => {
                    resolve(account)
                })
                .catch((error) => {
                    reject(error)
                })

        })

    }
    async getTrackers(query: AccountQuery) {
        const account = await AccountModel.findOne(query);

        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
            } else {

                resolve(account.trackers)
            }
        })
    }

    async removeTracker(query: AccountQuery, idTracker: string): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
                return;
            } 
           
            const updateTracker = account.trackers.filter(e => {
                console.log(e._id?.toString()!=idTracker)
                console.log(e._id?.toString(),idTracker)
                return e._id?.toString()!=idTracker})
            console.log(updateTracker, account.trackers)
            if (!updateTracker) {
                reject(new Error('Tracker not found'))
            }
            account.trackers = updateTracker
            account.save()
                .then((account) => {
                    resolve(account)
                }).catch((error) => {
                    reject(error)
                })
            
        })
    }

    checkAccountPassword(passwordAttempt: string, account: AccountDTO): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            const foundAccount = await this.findAccount({ email: account.email })
            if (!foundAccount) {
                reject(false)
            }
            const isValid = await encryptor.compare(passwordAttempt, foundAccount.password)

            resolve(isValid)
        })
    }

}

export { AccountController };