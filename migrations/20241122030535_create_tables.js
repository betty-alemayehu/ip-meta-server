/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("jokes", (table) => {
      table.increments("id")
          .primary();
      table.integer("hobby_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('hobbies');
      table.integer("mood_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('moods');
      table.integer("humour_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('humour');
      table.integer("age_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable('ages');
      table.string("joke_text").notNullable();
    })
    .createTable("humor", (table) => {
      table.increments("id")
          .primary();
      table.string("humor").notNullable();
    })
    .createTable("moods", (table) => {
      table.increments("id")
          .primary();
      table.string("mood").notNullable();
    })
    .createTable("hobbies", (table) => {
      table.increments("id")
          .primary();
      table.string("hobby").notNullable();
    })
    .createTable("ages", (table) => {
      table.increments("id")
          .primary();
      table.string("age").notNullable();
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable(jokes).dropTable(hobbies).dropTable(moods).dropTable(ages).dropTable(humour)
    
  };
  