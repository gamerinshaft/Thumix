require.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore',
    backbone: '../../bower_components/backbone/backbone',
    jade: '../../bower_components/jade/runtime'
  }
});

require(['jquery', 'views/thumix/app'], function($, AppView) {
  return $(function() {
    return new AppView({
      el: $('[data-js=app]')
    });
  });
});
