define ['jquery', 'backbone', 'views/thumix/canvas'], ($, Backbone, CanvasView) ->
  class FileMenuView extends Backbone.View
    initialize: (options) ->
      @$modal = $(@$el.children('li').attr('modalClass'))
      @$window =  $(window)
      @cHeight =  parseInt (@$window.height() * 0.8)
      @cWidth  =  parseInt (@$window.width() * 0.8)

    events:
      'click [data-js=openModal]' : 'openModal'
      'click [data-js=submit]' : 'createCanvas'
      'click [data-js=fileModal]' : 'stopEvent'
    openModal: (e)->
      e.preventDefault();
      e.stopPropagation();
      @$modal.modal('show')

    dropdownToggle: ->
      @$el.dropdown('toggle')

    stopEvent: (e) ->
      e.preventDefault();
      e.stopPropagation();


    createCanvas: (e)->
      e.preventDefault();
      e.stopPropagation();
      @$modal.modal('hide')
      @$modal.one "hidden.bs.modal", =>
        @dropdownToggle()
      console.log "受け取りました。"
