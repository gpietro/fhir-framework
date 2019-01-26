const hook = require('../../lib/schema-validator');
const validate = hook('../../../fhir/schema/<%= resourceName %>.schema.json');

<% if (requiresAuth) { %>const { authenticate } = require('@feathersjs/authentication').hooks;<% } %>

module.exports = {
  before: {
    all: [<% if (requiresAuth) { %> authenticate('jwt') <% } %>],
    find: [],
    get: [],
    create: [ validate ],
    update: [ validate ],
    patch: [ validate ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
