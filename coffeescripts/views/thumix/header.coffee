define ['jquery', 'backbone', 'templates/thumix/header', 'views/thumix/fileMenu', 'views/thumix/windowMenu'], ($, Backbone,  template, FileMenuView, WindowMenuView) ->
  class HeaderView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()
      new FileMenuView(el: $('[data-js=fileMenu]'))
      new WindowMenuView(el: $('[data-js=windowMenu]'))

    renderBoards: ->
      @$el.html template

