const notifications = require('./notifications/notifications.service.js');
const users = require('./users/users.service.js');
const subscription = require('./subscription/subscription.service.js');
const push = require('./push/push.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(notifications);
  app.configure(users);
  app.configure(subscription);
  app.configure(push);
};
