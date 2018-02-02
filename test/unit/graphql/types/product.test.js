const test = require('ava');
const { expect } = require('chai');
const { productSchema } = require('../../../../graphql/types/product');

test('Product Type: test schema', (t) => {
  expect(productSchema.getFields().description.name).equal('description');
  expect(String(productSchema.getFields().description.type)).to.equal('String!');

  expect(productSchema.getFields().quantity.name).equal('quantity');
  expect(String(productSchema.getFields().quantity.type)).to.equal('Int!');

  expect(productSchema.getFields().id.name).equal('id');
  expect(String(productSchema.getFields().id.type)).to.equal('Int!');

  t.pass();
});
