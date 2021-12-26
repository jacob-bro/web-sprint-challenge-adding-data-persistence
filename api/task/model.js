const db = require("../../data/dbConfig.js")

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

async function get() {
    return db("tasks")
}

async function getById() {
    return 
}

async function create() {
    return
}

async function update() {
    return
}

async function remove() {
    return
}
