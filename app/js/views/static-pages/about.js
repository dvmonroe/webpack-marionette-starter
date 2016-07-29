import termsTemplate from 'text!templates/static-pages/terms.html';

var AboutPage = Backbone.Marionette.LayoutView.extend({
  template: _.template(termsTemplate),

});

module.exports = AboutPage;
