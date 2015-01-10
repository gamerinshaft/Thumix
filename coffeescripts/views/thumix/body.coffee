define ['jquery', 'backbone', 'templates/thumix/body', 'views/thumix/tools/tool', 'views/thumix/canvases/canvases'], ($, Backbone,  template, ToolView, CanvasesView) ->
  class BodyView extends Backbone.View
    initialize: (options) ->
      @renderDom()
      @tool = options.tool
      @canvas = options.canvas
      @canvases = options.canvases
      new ToolView(el: $('[data-js=tool]'), tool: @tool)
      new CanvasesView(el: $('[data-js=canvases]'), canvas: @canvas, canvases: @canvases)

    renderDom: ->
      @$el.html template
