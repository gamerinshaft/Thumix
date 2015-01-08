require.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    backbone: '../../bower_components/backbone/backbone',
    jade: '../../bower_components/jade/runtime'
  },
  shim: {
    'bootstrap': {
      deps: ["jquery"]
    }
  }
});

require(['jquery', 'bootstrap', 'views/thumix/app'], function($, bootstrap, AppView) {
  return $(function() {
    return new AppView({
      el: $('[data-js=app]')
    });
  });
});
