define ['jquery', 'backbone', 'templates/thumix/header', 'views/thumix/fileMenu', 'views/thumix/windowMenu'], ($, Backbone,  template, FileMenuView, WindowMenuView) ->
  class HeaderView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      new FileMenuView(el: $('[data-js=fileMenu]'))
      new WindowMenuView(el: $('[data-js=windowMenu]'))
      @$(".modal-content").draggable
        scroll: false
        containment:  '[module=field]'
      isOn = true
      isClick = false
      $openDropdown = ''
      @$(".dropdown")

      .on "shown.bs.dropdown", ->
        @$openDropdown = this

      @$('[tabs]')
      .on "mouseleave", ->
        isOn = false

      @$('.dropdown')
      .on "click", ->
        $('[data-js=body]').one "click", ->
          isClick = false
          $(@$openDropdown).dropdown('toggle')

        isClick = true
        isOn = true
      .on "mouseleave", ->
        if !isOn
          isOn = true

      .on "mouseenter", ->
        if isClick && isOn
          $(this).children("ul").dropdown('toggle')

    renderBoards: ->
      @$el.html template
