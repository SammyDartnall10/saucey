const neo4j = require("neo4j-driver");

const driverOptions = {
    maxConnectionPoolSize: 100,
    connectionTimeout: 30000, // 30 seconds
    logging: {
        level: 'info',
        logger: (level, message) => console.log(level + ' ' + message)
    },
}

let driver

async function initDriver() {
    driver = neo4j.driver(process.env.DATABASE_URI, neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PASSWORD), driverOptions)

    await driver.verifyConnectivity()
    console.log(`Driver is ready`)

    return driver
}


const getDriver = function () {
    return driver
}

module.exports = {
    getDriver,
    initDriver
};