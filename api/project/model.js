const db = require("../../data/dbConfig.js")

module.exports = {
    get,
    getById,
    create
}

async function get() {
    return db("projects")
}

async function getById(id) {
    return db("projects").where("project_id", id).first()
}

async function create({project_name,project_description,project_completed}) {
  const [id] = await db("projects").insert({project_name,project_description,project_completed})
  return getById(id) 
}

async function update() {
    return 'not needed'
}

async function remove() {
    return 'not needed'
}