// migrations/20241117203727_create_users_table.js

/**
 * Create the users table
 * @param { import("knex").Knex } knex
 */
export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // Auto-incrementing ID
    table.string("name").notNullable(); // User name
    table.string("email").unique().notNullable(); // Unique email
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
}

/**
 * Drop the users table
 * @param { import("knex").Knex } knex
 */
export async function down(knex) {
  return knex.schema.dropTable("users");
}
