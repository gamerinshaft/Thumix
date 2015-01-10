define ['jquery', 'backbone', 'templates/thumix/body', 'views/thumix/tools/tool'], ($, Backbone,  template, ToolView) ->
  class BodyView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      @tool = options.tool
      new ToolView(el: $('[data-js=tool]'), tool: @tool)

    renderBoards: ->
      @$el.html template
