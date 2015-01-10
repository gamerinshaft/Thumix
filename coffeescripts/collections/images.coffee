define ['jquery', 'backbone', 'models/image'], ($, Backbone, Canvas) ->
  class Images extends Backbone.Collection
    model: Image