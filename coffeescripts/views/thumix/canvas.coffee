define ['jquery', 'backbone', 'models/canvas', 'templates/thumix/canvas'], ($, Backbone, Canvas, template) ->
  class CanvasView extends Backbone.View
    initialize: (options) ->
      @width = options.width
      @height = options.height
      @renderBoards()
      @addProperty()
      model = new Canvas()
      console.log model.get('name')
      model.set name: '値を変更しました'
      console.log model.get('name')

    renderBoards: ->
      @$el.html template

    addProperty: ->
      $('[module="canvasField"]').css
          width: @width
          height: @height


