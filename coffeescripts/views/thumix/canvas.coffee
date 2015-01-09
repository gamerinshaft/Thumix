define ['jquery', 'backbone', 'templates/thumix/canvas'], ($, Backbone,  template) ->
  class CanvasView extends Backbone.View
    initialize: (options) ->
      @width = options.width
      @height = options.height
      @renderBoards()
      @addProperty

    renderBoards: ->
      @$el.html template

    addProperty: ->
      @$el.css({
          width: @width
          height: @height
        })


