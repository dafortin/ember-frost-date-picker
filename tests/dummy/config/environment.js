module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-cli-notifications': {
      includeFontAwesome: true
    },

    'ember-prop-types': {
      spreadProperty: 'options',
      throwErrors: true,
      validateOnUpdate: true
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true
    // ENV.APP.LOG_ACTIVE_GENERATION = true
    // ENV.APP.LOG_TRANSITIONS = true
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    // ENV.APP.LOG_VIEW_LOOKUPS = true
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production' || environment === 'pages') {
    ENV.locationType = 'hash'
    ENV.rootURL = '/ember-frost-date-picker'
    ENV.isDemo = true
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
  }

  return ENV
}
