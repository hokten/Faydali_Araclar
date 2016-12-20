/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
      moment: {
          includeLocales: ['tr']
    },
    modulePrefix: 'ember-login',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyBvV_o8P-rELnLdaH45SZywnRWs8mXK13g",
      authDomain: "deneme-97fdc.firebaseapp.com",
      databaseURL: "https://deneme-97fdc.firebaseio.com",
      storageBucket: "deneme-97fdc.appspot.com",
      messagingSenderId: "904923110981"
    },
    /*
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' http://193.255.105.70:3389 https://auth2service.herokuapp.com:3000",
      'connect-src': "'self' http://193.255.105.70:3389 https://auth2service.herokuapp.com:3000"
    },
    */
    


    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
