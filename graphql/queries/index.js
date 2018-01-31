const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql')
const { productQuery, productsQuery } = require('./product.query')

const query = new GraphQLObjectType({
    name: 'query',
    description: 'this query return products, clients and users',
    fields : {
        product: productQuery,
        products: productsQuery,
    }
})

module.exports = {
    query
}