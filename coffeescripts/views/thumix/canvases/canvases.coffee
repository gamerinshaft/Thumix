define ['jquery', 'backbone', 'templates/thumix/canvases','views/thumix/canvases/canvas'], ($, Backbone, template, CanvasView) ->
  class CanvasesView extends Backbone.View
    initialize: (options) ->
      @canvases = options.canvases
      @render()
      @listenTo @canvases, 'add', (canvas) =>
        @canvasView = new CanvasView(el: $('[data-js=canvas]'), canvas: canvas)
        console.log canvas.get('name')
        console.log 'kitaaa'
        @canvases.each (b) =>
          console.log b.get('name')


    #   # @width = options.width
    #   # @height = options.height
    #   # @name = options.name
    #   @canvases = options.canvases

    render: ->
      @$el.html template

    # # addProperty: ->
    # #   $('[module="canvasField"]').css
    # #       width: @width
    # #       height: @height

    # createCanvas: (options)->
    #   canvas = new Canvas(name: options.name, height: options.height, width: options.width)
    #   @renderBoards()
    #   @addProperty()

    #   @canvases.add canvas

    #   @canvases.each (canvas) ->
    #     console.log canvas.get('name')
