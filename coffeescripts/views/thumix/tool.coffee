define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      $("[data-js=toolBox]").draggable()

    events:
      "click [data-js=remove]" : "removeToolBox"

    renderBoards: ->
      @$el.html template

    removeToolBox: ->
      @$el.html ''


