define ['jquery', 'backbone', 'views/thumix/header', 'templates/thumix/field'], ($, Backbone, HeaderView, template) ->
  class FieldView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()
      new HeaderView(el: $('[data-js=header]'));

    events:
      'click [data-js=destroy]' : 'destroy'

    renderBoards: ->
      @$el.html template

    destroy: ->
      console.log '×ボタンが押されました'