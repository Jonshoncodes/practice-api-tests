import axios from 'axios';
import { expect } from 'chai';

const BASE_URL = 'https://api.practicesoftwaretesting.com';

describe('Practice Software Testing API', function () {
  this.timeout(10000); 

  let token = '';

  it('Register a new user', async () => {
    const response = await axios.post(`${BASE_URL}/users/register`, {
      firstName: "John",
      lastName: "Doe",
      email: `test${Date.now()}@mail.com`, 
      password: "Password123!"
    });
  
    expect(response.status).to.equal(201);
    expect(response.data.message).to.include('success');
  });

  it('Login with valid credentials', async () => {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email: 'john.doe@email.com"', 
      password: 'Password123!'
    });

    expect(response.status).to.equal(200);
    token = response.data.token;
  });

  it('Change Password', async () => {
    const response = await axios.post(`${BASE_URL}/users/change-password`, {
      oldPassword: 'Password123!',
      newPassword: 'NewPassword123!'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    expect(response.status).to.equal(200);
  });

  it('Forgot Password', async () => {
    const response = await axios.post(`${BASE_URL}/users/forgot-password`, {
      email: 'john.doe@email.com'
    });

    expect(response.status).to.equal(200);
  });

  it('Logout user', async () => {
    const response = await axios.post(`${BASE_URL}/users/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });

    expect(response.status).to.equal(200);
  });
});
