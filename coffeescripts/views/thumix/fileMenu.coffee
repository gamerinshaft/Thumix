define ['jquery', 'backbone', 'collections/canvases'], ($, Backbone, Canvases) ->
  class FileMenuView extends Backbone.View
    initialize: (options) ->
      # @$modal = $(@$el.children('li').attr('modalClass'))
      # @cHeight =  parseInt (@$window.height() * 0.8)
      # @cWidth  =  parseInt (@$window.width() * 0.8)
      # @$window =  $(window)

    # events:
    #   'click [data-js=openModal]' : 'openModal'
      # 'click [data-js=fileModal]' : 'stopEvent'
      # 'click [data-js=submit]' : 'createCanvas'

    # openModal: (e)->
    #   e.preventDefault();
    #   e.stopPropagation();
    #   @$modal.modal('show')

    # dropdownToggle: ->
    #   @$el.dropdown('toggle')

    # stopEvent: (e) ->
    #   e.preventDefault();
    #   e.stopPropagation();


    # createCanvas: (e)->
    #   e.preventDefault();
    #   e.stopPropagation();
    #   @$modal.modal('hide')
    #   @$modal.one "hidden.bs.modal", =>
    #     @dropdownToggle()
    #   @$name = @$('[data-js=canvasName]')
    #   @name = @$name.val()
    #   @$name.val('新規キャンバス')

      # @canvas.createCanvas(name: @name, width: @cWidth, height: @cHeight)
