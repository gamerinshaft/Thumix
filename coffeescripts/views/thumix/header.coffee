define ['jquery', 'backbone', 'templates/thumix/header', 'views/thumix/canvas'], ($, Backbone,  template, CanvasView) ->
  class HeaderView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    events:
      'click [data-js=newFile]' : 'createCanvas'
    renderBoards: ->
      @$el.html template

    createCanvas: (e)->
      e.stopPropagation();
      e.preventDefault();
      new CanvasView(el: $('[data-js=canvas]'))
