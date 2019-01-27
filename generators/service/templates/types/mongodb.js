// Initializes the `<%= name %>` service on path `/<%= path %>`
const createService = require("feathers-mongodb");
const hooks = require("./<%= kebabName %>.hooks");
const initSchema = require('../../lib/init-schema-docs');

module.exports = function(app) {
  const paginate = app.get("paginate");
  const mongoClient = app.get("mongoClient");
  const options = { paginate };

  const <%= resourceName %> = createService(options)
  <%= resourceName %>.docs = initSchema('<%= resourceName %>')
  app.use('/<%= path %>', <%= resourceName %>);
  // Get our initialized service so that we can register hooks and filters
  const service = app.service("<%= path %>");

  mongoClient.then(db => {
    service.Model = db.collection("<%= kebabName %>");
  });

  service.hooks(hooks);
};
