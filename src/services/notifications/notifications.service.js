// Initializes the `notifications` service on path `/notifications`
const createService = require('feathers-nedb');
const createModel = require('../../models/notifications.model');
const hooks = require('./notifications.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/notifications', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('notifications');

  service.hooks(hooks);
};
