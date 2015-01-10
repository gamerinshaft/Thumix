define ['jquery', 'backbone', 'models/canvas', 'templates/thumix/canvas', 'views/thumix/canvases/new'], ($, Backbone, Canvas, template, NewCanvasView) ->
  class CanvasesView extends Backbone.View
    initialize: (options) ->
      # @width = options.width
      # @height = options.height
      # @name = options.name
      @canvases = options.canvases

    renderBoards: ->
      @$el.html template
      new NewCanvasView(el: @$('[data-js=newCanvas]'), canvases: @canvases)

    # addProperty: ->
    #   $('[module="canvasField"]').css
    #       width: @width
    #       height: @height

    createCanvas: (options)->
      canvas = new Canvas(name: options.name, height: options.height, width: options.width)
      @renderBoards()
      @addProperty()

      @canvases.add canvas

      @canvases.each (canvas) ->
        console.log canvas.get('name')
