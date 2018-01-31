const express = require('express')
const { graphql } = require('graphql')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./graphql/index')

const PORT = 3000
const app = express()

app.use('/graphql',  graphqlHTTP({ schema, pretty: true, graphiql: true }))

app.listen(PORT, () => console.log('Running ...'))

module.exports = {
    app
}