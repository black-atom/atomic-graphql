const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
const { productSchema } = require('../types/product')
const { Product } = require('../../db').models

const productQuery = {
    type: productSchema,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (obj, args, context) => {
        const product = await Product
            .findOne({ where: { id: args.id } })
        return product
    }
}

const productsQuery = {
    type: GraphQLList(productSchema),
    args: {
        id: {
            type: GraphQLInt
        }
    },
    resolve: async (obj, args, context) => {
        const products = await Product
            .findAll({ where: {} })
        return products
    }
}

module.exports = {
    productQuery,
    productsQuery
}