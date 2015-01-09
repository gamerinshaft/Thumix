define ['jquery', 'backbone', 'views/thumix/canvas'], ($, Backbone, CanvasView) ->
  class FileMenuView extends Backbone.View
    initialize: (opitons) ->
      @$window =  $(window)
      @wHeight =  parseInt @$window.height()
      @wWidth  =  parseInt @$window.width()
    events:
      'click [data-js=newFile]' : 'createCanvas'

    createCanvas: (e)->
      e.stopPropagation();
      e.preventDefault();
      console.log @wHeight + "," + @wWidth


      new CanvasView(el: $('[data-js=canvas]'))
