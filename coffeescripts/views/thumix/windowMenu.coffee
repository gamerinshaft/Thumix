define ['jquery', 'backbone'], ($, Backbone) ->
  class WindowMenuView extends Backbone.View
    initialize: (options) ->
      @tool = options.tool

    events:
      'click [data-js=showTool]' : 'showTool'

    showTool: (e)->
      e.stopPropagation();
      e.preventDefault();
      @tool.set(status: 'show')
      @dropdownToggle()


    dropdownToggle: ->
      @$el.dropdown('toggle')
