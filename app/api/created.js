'use strict';

const Create = require('../models/create');

const Created = {
  find: {
    auth: false,
    handler: async function(request, h) {
      const created = await Create.find();
      return created;
    }
  },
};

module.exports = Created;