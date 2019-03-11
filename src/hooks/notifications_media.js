// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log ( context )
    if ( !context.data.image ){
      context.data.image = context.app.settings.image
    }
    if ( !context.data.logo ){
      context.data.logo = context.app.settings.logo
    }
    return context
  }
}
