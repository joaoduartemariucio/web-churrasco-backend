
exports.up = function (knex) {
    return knex.schema.createTable('login_user_session', function (table) {
        table.increments();
        table.string('login_id').notNullable();
        table.string('token').notNullable();
        table.string('data_expira_token').notNullable();
        table.string('refresh_token').notNullable();
        table.string('data_expira_refresh_token').notNullable();
        table.foreign('login_id').references('id').inTable('login_user');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('login_user_session');
};