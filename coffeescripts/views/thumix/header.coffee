define ['jquery', 'backbone', 'templates/thumix/header'], ($, Backbone,  template) ->
  class HeaderView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    events:
      'click [data-js=destroy]' : 'destroy'
    renderBoards: ->
      @$el.html template

    destroy: ->
      console.log '×ボタンが押されました'