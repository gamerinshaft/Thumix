define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    renderBoards: ->
      @$el.html template


