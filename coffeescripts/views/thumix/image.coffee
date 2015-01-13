define ['jquery', 'backbone', 'templates/thumix/image'], ($, Backbone,  template) ->
  class ImageView extends Backbone.View
    initialize: (options) ->
      className: 'image'
      tagName: 'div'

      @image = options.image
      @renderDom()


    events:
      "click [function=removeBtn]" : "removeImage"
      "mousedown [function=resizeBtn]" : "resizeImage"
      "mouseup [function=resizeBtn]" : "Image"

    renderDom: ->
      @$el.append template(image: @image)
      @$("#image" + @image.get('order'))
      .css
        height: $("#image" + @image.get('order')).height() + "px"
      .draggable
        containment: @$el
        stack: "[module=image]"
        zIndex: 10

      .resizable
        containment: @$el
        minWidth: 50
        minHeight: 50



    removeImage: (e)->
      e.preventDefault();
      e.stopPropagation();
      console.log $(this)
      if window.confirm $(this).attr("image-order")
        @remove()


    resizeImage: (e)->
      console.log "おされたよ"
      console.log e.pageX


    Image: (e)->
      console.log "はなされたよ"
      console.log e.pageX