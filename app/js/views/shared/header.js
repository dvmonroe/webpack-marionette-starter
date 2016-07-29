import headerTemplate from 'text!templates/shared/header.html';

var Header = Backbone.Marionette.LayoutView.extend({
  template: _.template(headerTemplate)
});

module.exports = Header;
