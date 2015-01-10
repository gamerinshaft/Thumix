define ['jquery', 'backbone', 'templates/thumix/tool', 'models/image'], ($, Backbone,  template, Image) ->
  class ToolView extends Backbone.View
    initialize: (options) ->
      @renderDom()
      @tool = options.tool
      @images = options.images
      @imageNum = 0

      @tool.on "change", =>
        switch @tool.get('status')
          when 'show'
            @$('[data-js=toolBox]').removeClass 'hide'
          when 'hidden'
            @$('[data-js=toolBox]').addClass 'hide'

      $("[data-js=toolBox]").draggable
        scroll: false
        containment:  '[module=body]'

      $('[data-js=acceptBox]')
      .on 'dragover', (e)->
        e.preventDefault()
        e.stopPropagation()
      .on 'drop', (e)->
        e.preventDefault()
        e.stopPropagation()
      .on 'click', (e)=>
        e.preventDefault()
        @$('[data-js=submitImage]').trigger("click")

      @$('[data-js=submitImage]')
      .on 'change', =>
        @renderImage()


    events:
      "click [data-js=remove]" : "removeToolBox"

    renderDom: ->
      @$el.html template

    renderImage: =>
      @image = new Image()
      fileObject = @$('[data-js=submitImage]')[0].files[0];
      reader = new FileReader()

      if !fileObject.type.match 'image.*'
        alert('画像ファイルだけアップロードできるんですよ先輩！！！')
      else
        reader.onload = =>
          width = parseInt($(window).width() * 0.1)
          img_src = $('<img id="image'+ @imageNum + '" class="image" style="width:' + width + 'px">').attr('src', reader.result);
          @image.set
            width: width
            src : reader.result
            order : @imageNum
          @images.add @image

          @imageNum +=1

        reader.readAsDataURL(fileObject);
    removeToolBox: ->
      @tool.set(status: 'hidden')