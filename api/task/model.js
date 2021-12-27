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

async function getById(id) {
    return db("tasks").where("task_id", id).first()
}

async function create({task_description,task_notes,task_completed,project_id}) {
    const [id] = await db("tasks").insert({task_description,task_notes,task_completed,project_id})
    return getById(id)
}

async function update() {
    return
}

async function remove() {
    return
}
