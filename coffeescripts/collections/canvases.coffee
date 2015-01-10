define ['jquery', 'backbone', 'models/canvas'], ($, Backbone, Canvas) ->
  class Canvases extends Backbone.Collection
    model: Canvas