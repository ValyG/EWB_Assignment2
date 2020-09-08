'use strict';

const assert = require('chai').assert;
const axios = require('axios');

suite('Create API tests', function () {

  test('get created', async function () {
    const response = await axios.get('http://localhost:3000/api/created');
    const created = response.data;
    assert.equal(12, created.length);
    assert.equal(created[0].name, 'Grant Pharmacy');
    assert.equal(created[0].description, 'Main Street, Ennicorthy');
    assert.equal(created[0].category, '24/7, 7 days a week');

    assert.equal(created[1].name, 'Slaney Pharmacy');
    assert.equal(created[1].description, 'Slaney Court, Ennicorthy');
    assert.equal(created[1].category, '09:00-17:30, Monday to Friday');
  });
});