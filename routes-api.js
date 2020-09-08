const Created = require('./app/api/created');

module.exports = [
  { method: 'GET', path: '/api/created', config: Created.find },
  { method: 'GET', path: '/api/created/{id}', config: Created.findOne },

];