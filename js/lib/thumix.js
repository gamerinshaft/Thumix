require.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore',
    backbone: '../../bower_components/backbone/backbone',
    jade: '../../bower_components/jade/runtime'
  }
});

require(['jquery', 'views/thumix/base'], function($, BaseView) {
  return $(function() {
    return new BaseView({
      el: $('[data-js=app]')
    });
  });
});
