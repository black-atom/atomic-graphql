const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
const { productSchema } = require('../types/product')
const { Product } = require('../../db/models/product')

const productMutation = {
    type: productSchema,
    args: {
        id: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        }
    },
    resolve: async (obj, args, context) => {
        const product = await Product
            .create({ description: args.description, quantity: args.quantity })
        return product
    }
}

module.exports = {
    productMutation,
}