define ['jquery', 'backbone', 'views/thumix/canvas'], ($, Backbone, CanvasView) ->
  class FileMenuView extends Backbone.View
    initialize: (opitons) ->

    events:
      'click [data-js=newFile]' : 'createCanvas'

    createCanvas: (e)->
      e.stopPropagation();
      e.preventDefault();
      new CanvasView(el: $('[data-js=canvas]'))
