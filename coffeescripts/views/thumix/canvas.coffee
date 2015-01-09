define ['jquery', 'backbone', 'templates/thumix/canvas'], ($, Backbone,  template) ->
  class CanvasView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    renderBoards: ->
      @$el.html template


