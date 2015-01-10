define ['jquery', 'backbone'], ($, Backbone) ->
  class Canvas extends Backbone.Model
    defaults:
      name: '新規キャンバス'
      height: 0
      width:  0