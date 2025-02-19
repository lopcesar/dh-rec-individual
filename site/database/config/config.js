module.exports = {
    development: {
        username: "root",
        password: "root",
        database: "movies_catchup",
        host: "127.0.0.1",
        dialect: "mysql",
        timestamp: false,
    
    },
    test: {
        username: "root",
        password: null,
        database: "movies_catchup",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: process.env.AWS_DB_USER,
        password: process.env.AWS_DB_PASS,
        database: process.env.AWS_DB,
        host: process.env.AWS_DB_HOST,
        dialect: "mysql",
    },
};
