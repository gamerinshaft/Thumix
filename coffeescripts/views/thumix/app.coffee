define ['jquery', 'backbone', 'templates/thumix/app', 'views/thumix/header', 'views/thumix/field'], ($, Backbone,  template, HeaderView, FieldView) ->
  class AppView extends Backbone.View
    initialize: (opitons) ->
      aa =
        '
        ∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n ∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃   ∃∃∃∃∃∃∃   ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃   ∃∃∃   ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃     ∃∃∃     ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃   ∃   ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃   ∃   ∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃       ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃∃     ∃∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃    ∃    ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃             ∃∃∃∃  ∃∃∃   ∃∃∃  ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n
        '
      console.log(aa)
      @renderBoards()

      new HeaderView(el: $('[data-js=header]'));
      new FieldView(el: $('[data-js=field]'));
    events:
     'click [data-js=destroy]' : 'destroy'
    renderBoards: ->
      @$el.html template

    destroy: ->
      console.log '×ボタンが押されました'