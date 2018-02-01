const {
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const { productSchema } = require('../types/product');
const db = require('../../db');

const { Product } = db.models;


const productMutation = {
  type: productSchema,
  args: {
    id: {
      type: GraphQLInt,
    },
    description: {
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLInt,
    },
  },
  resolve: async (obj, args) => {
    const prod = await Product
      .create({ description: args.description, quantity: args.quantity });
    return prod;
  },
};

module.exports = {
  productMutation,
};
