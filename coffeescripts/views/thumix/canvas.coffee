define ['jquery', 'backbone', 'models/canvas', 'templates/thumix/canvas'], ($, Backbone, Canvas, template) ->
  class CanvasView extends Backbone.View
    initialize: (options) ->
      @width = options.width
      @height = options.height
      @name = options.name
      @renderBoards()
      @addProperty()

      @canvasModel = new Canvas()
      @canvasModel.set name: @name, height: @height, width: @width
      console.log  @canvasModel.get('name') + 'を保存しました'
      console.log  @canvasModel.get('height') + 'を保存しました'
      console.log  @canvasModel.get('width') + 'を保存しました'

    renderBoards: ->
      @$el.html template

    addProperty: ->
      $('[module="canvasField"]').css
          width: @width
          height: @height


