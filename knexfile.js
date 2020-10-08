// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    },

    staging: {
        client: 'sqlite',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    },

    production: {
        client: 'sqlite',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    }
};