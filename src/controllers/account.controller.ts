import { AccountDTO, TrackerDTO } from "../types"

import { AccountModel, TrackerSchema } from '../models/account.model'

interface AccountQuery {
    _id?: string;
    email?: string;
}


class AccountController {
    constructor() { }

    async createAccount(data: AccountDTO): Promise<AccountDTO> {
        const newAccount = await new AccountModel(data).save();
        // TODO encrypt password and remove from response
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

    async findAccount(query: AccountQuery): Promise<AccountDTO | null> {
        const accountFound = await AccountModel.findOne(query, { password: 0 })

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

    async updateTracker(query: AccountQuery, nameTracker: string, data: TrackerDTO): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);

        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
            } else {
                const updateTracker = account.trackers.filter(e => e.name !== nameTracker)
                if (!updateTracker) {
                    reject(new Error('Tracker not found'))
                }
                account.trackers = updateTracker
                account.trackers.push(data);
                account.save().then((account) => {
                    resolve(account)
                }).catch((error) => {
                    reject(error)
                })
            }
        })

    }

    async removeTracker(query: AccountQuery, nameTracker: string): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        return new Promise((resolve, reject) => {
            if (!account) {
                reject(new Error('Account not found'))
            } else {
                const updateTracker = account.trackers.filter(e => e.name !== nameTracker)
                if (!updateTracker) {
                    reject(new Error('Tracker not found'))
                }
                account.trackers = updateTracker
                account.save().then((account) => {
                    resolve(account)
                }).catch((error) => {
                    reject(error)
                })
            }
        })
    }

}

export { AccountController };