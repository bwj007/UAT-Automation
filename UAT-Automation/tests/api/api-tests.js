const axios = require('axios');
const { expect } = require('chai');

describe('API Login Tests', () => {
  it('should login successfully via API', async () => {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: 'emilys',
      password: 'emilyspass'
    });
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('accessToken');
  });

  it('should fail login with invalid credentials via API', async () => {
    try {
      await axios.post('https://dummyjson.com/auth/login', {
        username: 'wrong',
        password: 'wrong'
      });
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.have.property('message', 'Invalid credentials');
    }
  });
});