define ['jquery', 'backbone'], ($, Backbone) ->
  class Canvas extends Backbone.Model
    defaults:
      name: 'デフォルト値'
      height: 0
      width:  0