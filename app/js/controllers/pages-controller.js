import HomePage from 'views/home/index';
import AboutPage from 'views/static-pages/about';
import SharedFooter from 'views/shared/footer';
import SharedHeader from 'views/shared/header';

let basicLayout = function(view){
  App.header.show(new SharedHeader());
  App.mainView.show(view);
  App.footer.show(new SharedFooter());
};

var PagesController = function() {
  return {
    index: function() {
      basicLayout(new HomePage());
    },
    'about': function() {
      basicLayout(new AboutPage());
    }
  };
};

module.exports = PagesController;
