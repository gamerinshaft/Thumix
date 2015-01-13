define ['jquery', 'backbone', 'templates/thumix/image'], ($, Backbone,  template) ->
  class ImageView extends Backbone.View
    className: 'image'
    tagName: 'i'
    id: ->
     return _.uniqueId('image')
    attributes: { 'module': 'image' }

    initialize: (options) ->
      @image = options.image
      @$el.css
        width: @image.get("width") + "px"

    events:
      "click [function=removeBtn]" : "removeImage"

    renderDom: ->
      @$el.html template(image: @image)
      @$el
      .draggable
        containment: $("[module=canvasField]")
        stack: "[module=image]"
        zIndex: 10

      .resizable
        containment: $("[module=canvasField]")
        minWidth: 50
        minHeight: 50
      @


    removeImage: (e)->
      e.preventDefault();
      e.stopPropagation();
      if window.confirm "この画像を削除しますか？"
        @remove()
