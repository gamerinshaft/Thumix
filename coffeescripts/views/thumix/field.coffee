define ['jquery', 'backbone', 'templates/thumix/field'], ($, Backbone,  template) ->
  class FieldView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    events:
      'click [data-js=destroy]' : 'destroy'
    renderBoards: ->
      @$el.html template

    destroy: ->
      console.log '×ボタンが押されました'