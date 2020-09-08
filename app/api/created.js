'use strict';

const Create = require('../models/create');
const Boom = require('@hapi/boom');

const Created = {
  find: {
    auth: false,
    handler: async function(request, h) {
      const created = await Create.find();
      return created;
    }
  },
  findOne: {
    auth: false,
    handler: async function(request, h) {
      try {
        const created = await Create.findOne({ _id: request.params.id });
        if (!created) {
          return Boom.notFound('No Pharmacy with this id');
        }
        return created;
      } catch (err) {
        return Boom.notFound('No Pharmacy with this (incorrect in length) id !')
      }
    }
  },
};

module.exports = Created;