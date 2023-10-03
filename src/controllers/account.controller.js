const {Account} = require('../models/account.model.js')
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



}

module.exports =AccountController;