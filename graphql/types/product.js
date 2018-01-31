const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')

const productSchema =  new GraphQLObjectType({
    name: 'Product',
    description: 'Schema Product',
    fields: {
        description: {
            type: GraphQLNonNull(GraphQLString)
        },
        quantity: {
            type: GraphQLNonNull(GraphQLInt)
        },
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    }
})

module.exports = {
    productSchema
}