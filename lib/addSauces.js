// import neo4j, { session } from 'neo4j-driver'
const { get } = require('http')
const neo4j = require('neo4j-driver')
const { session } = require('neo4j-driver')
const { getDriver } = require('../server/neo4j')

const addSauces = async function (params) {
    const { name,
        maker,
        location } = params

    console.log(`Params are`)
    console.log(name, maker, location)

    const driver = getDriver()

    const session = driver.session()
    // ({
    // // Run sessions in WRITE mode by default
    // defaultAccessMode: session.WRITE,
    // // Run all queries against the `people` database
    // database: 'saucy',
    // })

    // Create a node within a write transaction
    const res = await session.executeWrite(tx => {
        return tx.run('CREATE (s:Sauce {name: $name}) RETURN s', { name })
    })

    // Get the `p` value from the first record
    const s = res.records[0].get('s')

    // Close the sesssion
    await session.close()

    // Return the properties of the node
    return s.properties

}

module.exports = {
    addSauces: addSauces,
};

