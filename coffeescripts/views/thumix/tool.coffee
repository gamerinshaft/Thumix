define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (options) ->
      if @$el.children().length
        @$el.removeClass "hide"
      else
        @renderBoards()
      $("[data-js=toolBox]").draggable
        scroll: false
        containment:  '[module=field]'

    events:
      "click [data-js=remove]" : "removeToolBox"

    renderBoards: ->
      @$el.html template

    removeToolBox: ->
      @$el.addClass "hide"

