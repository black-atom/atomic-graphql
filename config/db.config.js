const { getConfig } = require('./config')

const config = getConfig({
    development: {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        dialect: 'postgres'
    },

    test: {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        dialect: 'postgres'    
    },

    production: {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        dialect: 'postgres'   
    }
});

module.exports ={
    config
}