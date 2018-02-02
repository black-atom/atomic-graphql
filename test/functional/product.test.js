const test = require('ava');
const app = require('../../app');
const db = require('../../db');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { isDatabaseConnected } = require('../../helpers/database');

chai.use(chaiHttp);

test.beforeEach(async () => {
  await isDatabaseConnected(db);
});

test('Products Query', async (t) => {
  const query = `query {
        products {
            quantity
            description
        }
    }`;

  const result = await chai.request(app)
    .get('/graphql')
    .query({ query });

  chai.expect(result.body.data.products).be.an.instanceOf(Array);
  t.pass();
});
