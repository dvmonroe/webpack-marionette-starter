import homeTemplate from 'text!templates/home/index.html';

var HomePage = Backbone.Marionette.LayoutView.extend({
  template: _.template(homeTemplate),

});

module.exports = HomePage;
