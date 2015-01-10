define ['jquery', 'backbone', 'templates/thumix/canvas'], ($, Backbone, template) ->
  class CanvasesView extends Backbone.View
    initialize: (options) ->
      @canvas = options.canvas
      @render()
    render: ->
      @$el.html template(canvas: @canvas)