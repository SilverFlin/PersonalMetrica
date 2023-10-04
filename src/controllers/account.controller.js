const { Account, Tracker } = require('../models/account.model.js')
/**
 * 
 */
class AccountController {
    constructor() {

    }

    /**
     * 
     * @param {*} data 
     */
    async createAccount(data) {
        const newAccount = await new Account(data).save()
        if (newAccount) {
            // return
            return newAccount
        }
    }
    /**
     * 
     * @param {*} query 
     * @param {*} data 
     */
    async updateAccount(query, data) {

        const updateAccount = await Account.findOneAndUpdate(query, data)
        if (updateAccount) {
            // return
        }
    }
    /**
     * 
     * @param {*} query 
     */
    async findAccount(query) {
        await Account.findOne(query)
    }
    /**
     * 
     * @param {*} query 
     */
    async deleteAccount(query) {
        await Account.findOneAndDelete(query)
    }

    async createTracker(query, data) {

        const account = await Account.findOne(query);

        account.trackers.push(data);
        return await account.save()

    }
    async updateTracker(query, nameTracker, data) {

        const account = await Account.findOne(query);
        const updateTracker = account.trackers.find(e => e.name === nameTracker)
        if (!updateTracker) return new Error('Tracker does not exists!!')
        updateTracker.name = data.name

        await account.save()

    }

    async removeTracker(query, nameTracker) {

        const account = await Account.findOne(query);
        const updateTracker = account.trackers.filter(e => e.name !== nameTracker)
        if (!updateTracker) return new Error('Tracker does not exists!!')
        account.trackers = updateTracker
        await account.save()
    }

}

module.exports = AccountController;