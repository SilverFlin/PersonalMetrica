import { AccountDTO, TrackerDTO } from "../types"

import { AccountModel, TrackerSchema } from '../models/account.model'

interface AccountQuery {
    _id?: string;
    email?: string;
}


class AccountController {
    constructor() { }

    async createAccount(data: AccountDTO): Promise<AccountDTO> {
        try {
            const newAccount = await new AccountModel(data).save();
            return newAccount;
        } catch (error) {
            console.error('Error creating account:', error);
            throw new Error('Error creating account');
        }
    }

    async updateAccount(query: AccountQuery, data: AccountDTO): Promise<AccountDTO> {
        try {
            const updateAccount = await AccountModel.findOneAndUpdate(query, data)

            if (updateAccount) {
                return updateAccount;
            } else {
                throw new Error('Account not found');
            }

        } catch (error) {
            console.error('Error updating account:', error);
            throw new Error('Error updating account');
        }


    }

    async findAccount(query: AccountQuery): Promise<AccountDTO | null> {
        return await AccountModel.findOne(query)
    }

    async deleteAccount(query: AccountQuery): Promise<AccountDTO | null> {
        return await AccountModel.findOneAndDelete(query)
    }

    async createTracker(query: AccountQuery, data: TrackerDTO): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        if (!account) {
            throw new Error('Account not found')
        }
        account.trackers.push(data);
        return await account.save()
    }

    async updateTracker(query: AccountQuery, nameTracker: string, data: TrackerDTO): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        if (!account) {
            throw new Error('Account not found')
        }
        const updateTracker = account.trackers.find(e => e.name === nameTracker)
        if (!updateTracker) {
            throw new Error('Tracker not found')
        }

        updateTracker.name = data.name

        return await account.save()

    }

    async removeTracker(query: AccountQuery, nameTracker: string): Promise<AccountDTO | null> {

        const account = await AccountModel.findOne(query);
        if (!account) {
            throw new Error('Account not found')
        }
        const updateTracker = account.trackers.filter(e => e.name !== nameTracker)
        if (!updateTracker) {
            throw new Error('Tracker not found')
        }

        account.trackers = updateTracker
        return await account.save()
    }

}

export { AccountController };