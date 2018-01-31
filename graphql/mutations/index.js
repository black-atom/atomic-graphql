const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql')
const { productMutation } = require('./product.mutation')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'this Mutation to create Product, update Product, delete Product',
    fields : {
        createProduct: productMutation,
    }
})

module.exports = {
    mutation
}