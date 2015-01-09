define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()
      $("[data-js=toolBox]").draggable()

    renderBoards: ->
      @$el.html template


