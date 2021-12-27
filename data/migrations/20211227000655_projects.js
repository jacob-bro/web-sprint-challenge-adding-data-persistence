
exports.up = function(knex) {
    return knex.schema.createTable("projects",table=>{
        table.increments("project_id")
        table.text("name",128).unique().notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects")
};
