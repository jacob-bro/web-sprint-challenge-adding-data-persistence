
exports.up = function(knex) {
    return knex.schema.createTable("projects",table=>{
        table.increments("project_id")
        table.text("project_name",128).unique().notNullable()
        table.text("project_description")
        table.boolean("project_completed")
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects")
};
