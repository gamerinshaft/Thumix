define ['jquery', 'backbone', 'views/thumix/tool'], ($, Backbone, ToolView) ->
  class WindowMenuView extends Backbone.View
    initialize: (opitons) ->

    events:
      'click [data-js=showTool]' : 'showTool'

    showTool: (e)->
      e.stopPropagation();
      e.preventDefault();
      new ToolView(el: $('[data-js=tool]'))

