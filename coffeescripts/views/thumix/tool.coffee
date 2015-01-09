define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      $("[data-js=toolBox]").draggable()

    renderBoards: ->
      @$el.html template


