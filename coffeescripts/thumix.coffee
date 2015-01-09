require.config
  paths:
    jquery: '../../bower_components/jquery/dist/jquery'
    jqueryUI: '../../bower_components/jquery-ui/ui/jquery-ui'
    underscore: '../../bower_components/underscore/underscore'
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
    backbone: '../../bower_components/backbone/backbone'
    jade: '../../bower_components/jade/runtime'

  shim:
    'bootstrap':
      deps: ["jquery"]
    'jqueryUI':
      deps: ["jquery"]


require ['jquery', 'jqueryUI', 'bootstrap', 'views/thumix/app'], ($, jqueryUI, bootstrap, AppView) ->
  $ ->
    new AppView(el: $('[data-js=app]'));