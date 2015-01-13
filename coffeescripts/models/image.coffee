define ['jquery', 'backbone'], ($, Backbone) ->
  class Image extends Backbone.Model
    defaults:
      src: 'こちらがソースになります。'
      width: 0