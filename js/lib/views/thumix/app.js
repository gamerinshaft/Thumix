var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/app', 'views/thumix/header', 'views/thumix/field'], function($, Backbone, template, HeaderView, FieldView) {
  var AppView;
  return AppView = (function(_super) {
    __extends(AppView, _super);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.initialize = function(opitons) {
      var aa;
      aa = '∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n ∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃   ∃∃∃∃∃∃∃   ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃   ∃∃∃   ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃     ∃∃∃     ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃   ∃   ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃   ∃   ∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃       ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃∃     ∃∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃    ∃    ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃             ∃∃∃∃  ∃∃∃   ∃∃∃  ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n';
      console.log(aa);
      this.renderBoards();
      new HeaderView({
        el: $('[data-js=header]')
      });
      return new FieldView({
        el: $('[data-js=field]')
      });
    };

    AppView.prototype.events = {
      'click [data-js=destroy]': 'destroy'
    };

    AppView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    AppView.prototype.destroy = function() {
      return console.log('×ボタンが押されました');
    };

    return AppView;

  })(Backbone.View);
});
