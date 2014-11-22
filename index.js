'use strict';

module.exports = {
  name: 'ember-cli-multiselect-panels',
  included: function(app) {
    this._super.included(app);

    app.import('vendor/multiselect-panels.css')
  }
};
