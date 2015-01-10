define ['jquery', 'backbone'], ($, Backbone) ->
  class Tool extends Backbone.Model
    defaults:
      status: 'hidden'