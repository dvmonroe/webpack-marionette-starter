import App from './app';

import '!style!css!sass!../styles/application.scss';

window.App = App

$(function() {
  App.start();

  $(document).on('click', "a[href^='#']", function(event) {
    let href = $(event.currentTarget).attr('href');
    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
      App.trigger('route:go', {path: href, action: action});
    }
  });
});
