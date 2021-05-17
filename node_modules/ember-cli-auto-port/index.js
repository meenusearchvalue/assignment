/* jshint node: true */
'use strict';
var Promise = require('ember-cli/lib/ext/promise');
var portfinder = require("portfinder");
var getPort = Promise.denodeify(portfinder.getPort);

module.exports = {
  name: 'ember-cli-auto-port',

  serverMiddleware: function(startOptions) {
    portfinder.basePort = startOptions.options.port;
    return getPort({
      host: startOptions.options.host,
      basePort: startOptions.options.port
    }).then(function(port) {
      startOptions.options.port = port;
    }.bind(this));
  }
};
