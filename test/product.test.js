const superTest = require('supertest');
const app = require('../app');

describe('Test integration', () => {
  it('Qualquer nome', async () => {
    const query = `
            product(id: 1) {
                id
                quantity
                description
            }
        `;
    const result = await superTest(app).get({ query: `${query}` });
    console.log(result);
    expect(result).toBe();
  });
});
