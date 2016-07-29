import footerTemplate from 'text!templates/shared/footer.html';

var Footer = Backbone.Marionette.LayoutView.extend({
  template: _.template(footerTemplate)
});

module.exports = Footer;
