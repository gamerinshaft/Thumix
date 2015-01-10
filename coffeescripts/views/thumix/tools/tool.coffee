define ['jquery', 'backbone', 'templates/thumix/tool'], ($, Backbone,  template) ->
  class ToolView extends Backbone.View
    initialize: (options) ->
      @renderBoards()
      @tool = options.tool

      @tool.on "change", =>
        switch @tool.get('status')
          when 'show'
            @$('[data-js=toolBox]').removeClass 'hide'
          when 'hidden'
            @$('[data-js=toolBox]').addClass 'hide'

      $("[data-js=toolBox]").draggable
        scroll: false
        containment:  '[module=body]'

    events:
      "click [data-js=remove]" : "removeToolBox"

    renderBoards: ->
      @$el.html template

    removeToolBox: ->
      @tool.set(status: 'hidden')