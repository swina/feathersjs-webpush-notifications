const headers = require('../../hooks/headers')
const { authenticate } = require('@feathersjs/authentication').hooks;
const notifications_media = require('../../hooks/notifications_media')
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [notifications_media()],
    update: [],
    patch: [],
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
