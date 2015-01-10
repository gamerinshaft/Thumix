define ['jquery', 'backbone', 'models/canvas'], ($, Backbone, Canvas) ->
  class FileMenuView extends Backbone.View
    initialize: (options) ->
      @canvases = options.canvases
      @$modal = $(@$el.children('li').attr('modalClass'))

    events:
      'click [data-js=openModal]' : 'openModal'
      'click [data-js=fileModal]' : 'stopEvent'
      'click [data-js=submit]' : 'createCanvas'

    openModal: (e)->
      e.preventDefault();
      e.stopPropagation();
      @$modal.modal('show')

    stopEvent: (e) ->
      e.preventDefault();
      e.stopPropagation();

    createCanvas: (e)->
      e.preventDefault();
      e.stopPropagation();
      @$name = @$('[data-js=canvasName]')

      @$modal.modal('hide')

      @$modal.on "hidden.bs.modal", =>
        @dropdownToggle()
        @$name.val('新規キャンバス')

      @canvas = new Canvas()
      @canvas.set
        name:  @$name.val()
        height: parseInt($(window).height() * 0.8)
        width: parseInt ($(window).width() * 0.8)
      @canvases.add @canvas


    dropdownToggle: ->
      @$el.dropdown('toggle')

