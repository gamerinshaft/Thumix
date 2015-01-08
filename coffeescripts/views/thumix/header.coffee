define ['jquery', 'backbone', 'templates/thumix/header'], ($, Backbone,  template) ->
  class HeaderView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    events:
      'click [data-js=file]' : 'createCanvas'
    renderBoards: ->
      @$el.html template

    createCanvas: ->
      console.log '新しいキャンバスを生成します。'