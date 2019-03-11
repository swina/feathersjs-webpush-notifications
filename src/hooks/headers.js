// eslint-disable-next-line no-unused-vars


module.exports = function (options = {}) {
  return async context => {
    console.log(context.params.headers.origin )
    /*if ( context.params.provider === 'socketio' ){
      if ( context.params.headers.origin == 'http://127.0.0.1:8887' ){
        return context
      } else {
        context.result = "Not Authorized. You need to register an account in order to use this service"
        return context
      }
    } else {
      context.result = "Not allowed"
      return context
    }*/
  };
};
