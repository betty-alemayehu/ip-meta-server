/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema
    .createTable("humor", (table) => {
      table.increments("id").primary();
      table.string("humor").notNullable();
    })
    .createTable("moods", (table) => {
      table.increments("id").primary();
      table.string("mood").notNullable();
    })
    .createTable("hobbies", (table) => {
      table.increments("id").primary();
      table.string("hobby").notNullable();
    })
    .createTable("ages", (table) => {
      table.increments("id").primary();
      table.string("age").notNullable();
    })
    .createTable("jokes", (table) => {
      table.increments("id").primary();
      table
        .integer("hobby_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("hobbies")
        .onDelete("CASCADE");
      table
        .integer("mood_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("moods")
        .onDelete("CASCADE");
      table
        .integer("humor_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("humor")
        .onDelete("CASCADE");
      table
        .integer("age_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ages")
        .onDelete("CASCADE");
      table.string("joke_text").notNullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema
    .dropTable("jokes") // Drop the dependent table first
    .dropTable("hobbies")
    .dropTable("moods")
    .dropTable("ages")
    .dropTable("humor"); // Consistent spelling
}
