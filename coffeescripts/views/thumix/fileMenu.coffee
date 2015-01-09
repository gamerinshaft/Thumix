define ['jquery', 'backbone', 'views/thumix/canvas'], ($, Backbone, CanvasView) ->
  class FileMenuView extends Backbone.View
    initialize: (options) ->
      @$window =  $(window)
      @cHeight =  parseInt (@$window.height() * 0.8)
      @cWidth  =  parseInt (@$window.width() * 0.8)

    events:
      'click [data-js=newFile]' : 'createCanvas'

    createCanvas: (e)->
      e.stopPropagation();
      e.preventDefault();
      new CanvasView(el: $('[data-js=canvas]'), height: @cHeight, width: @cWidth)
      @dropdownToggle()

    dropdownToggle: ->
      @$el.dropdown('toggle')
