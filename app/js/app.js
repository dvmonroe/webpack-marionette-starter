import Router from './router';
import PagesController from './controllers/pages-controller';

const App = new Marionette.Application();

App.on('start', function() {
  Backbone.history.start({pushState: true, root: '/'});
  App.trigger('start:routes');
  App.vent = new Backbone.Wreqr.EventAggregator();
});

App.on('start:routes', function() {
  this.router = new Router({
    controller: PagesController()
  });
  // with push state we're checking pathname and splitting for just the string
  let start = Backbone.history.location.pathname.split('/')[1]
  if (start == ''){
    this.trigger('route:go', {path: '', action: 'index'})
  } else {
    let startFn = this.router.options.controller[start]
    if (typeof startFn === 'function') {
      this.trigger('route:go', {path: Backbone.history.location.pathname, action: start})
    }
  }
});

// doing this to have granular controller over routing
// rather than just saying trigger true
App.on('route:go', function(options) {
  this.router.navigate(options.path);
  let fn = this.router.options.controller[options.action]
  if (window.ga) {
    ga('send', 'pageview', options.path);
  }
  if (typeof fn === 'function') fn();
});

// dynamically change the title
App.vent.on('domchange:title', function(title){
  $(document).attr('title', title);
});

App.addRegions({
  body: '#body',
  header: '#header',
  mainView: '#main',
  footer: '#footer'
});

module.exports = App;
