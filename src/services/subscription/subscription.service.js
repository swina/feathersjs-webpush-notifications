// Initializes the `subscription` service on path `/subscription`
const createService = require('feathers-nedb');
const createModel = require('../../models/subscription.model');
const hooks = require('./subscription.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/subscription', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('subscription');

  service.hooks(hooks);
};
