define ['jquery', 'backbone', 'templates/thumix/image'], ($, Backbone,  template) ->
  class ImageView extends Backbone.View
    initialize: (options) ->
      @image = options.image
      @renderDom()

    renderDom: ->
      @$el.append template(image: @image)
      @$("#image" + @image.get('order'))
      .draggable
        containment: @$el
        stack: ".image"
        zIndex: 10
