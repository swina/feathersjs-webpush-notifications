// Initializes the `push` service on path `/push`
const createService = require('feathers-nedb');
const createModel = require('../../models/push.model');
const hooks = require('./push.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/push', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('push');

  service.hooks(hooks);
};
