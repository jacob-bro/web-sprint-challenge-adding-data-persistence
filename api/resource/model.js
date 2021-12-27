const db = require("../../data/dbConfig.js")

module.exports = {
    get,
    getById,
    create
}

async function get() {
    return db("resources")
}

async function getById(id) {
    return db("resources").where("resource_id", id).first()
}

async function create({resource_name,resource_description}) {
    const [id] = await db("resources").insert({resource_name,resource_description})
  return getById(id)
}

async function update() {
    return 'not needed'
}

async function remove() {
    return 'not needed'
}
