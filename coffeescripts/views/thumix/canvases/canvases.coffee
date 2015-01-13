define ['jquery', 'backbone', 'templates/thumix/canvases','views/thumix/canvases/canvas', 'views/thumix/image'], ($, Backbone, template, CanvasView, ImageView) ->
  class CanvasesView extends Backbone.View
    initialize: (options) ->
      @canvases = options.canvases
      @images   = options.images
      @render()
      @listenTo @canvases, 'add', (canvas) =>
        @canvasView = new CanvasView(el: $('[data-js=canvas]'), canvas: canvas)

      @listenTo @images, 'add', (image) =>
        new ImageView(image: image)

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
