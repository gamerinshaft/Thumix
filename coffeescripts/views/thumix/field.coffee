define ['jquery', 'backbone', 'views/thumix/header', 'templates/thumix/field'], ($, Backbone, HeaderView, template) ->
  class FieldView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      new HeaderView(el: $('[data-js=header]'));

    renderBoards: ->
      @$el.html template

