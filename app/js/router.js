const Router = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    '' : 'index',
    'about' : 'about'
  }
});

module.exports = Router;

