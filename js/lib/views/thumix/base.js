var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/base'], function($, Backbone, template) {
  var BaseView;
  return BaseView = (function(_super) {
    __extends(BaseView, _super);

    function BaseView() {
      return BaseView.__super__.constructor.apply(this, arguments);
    }

    BaseView.prototype.initialize = function(opitons) {
      var aa;
      aa = '∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n ∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃   ∃∃∃∃∃∃∃   ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃   ∃∃∃   ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃     ∃∃∃     ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃   ∃   ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃             ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃   ∃   ∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃∃       ∃∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃  ∃∃     ∃∃  ∃∃∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃∃∃    ∃    ∃∃∃∃∃\n ∃∃∃∃∃∃∃   ∃∃∃∃∃∃∃∃∃    ∃∃∃∃∃    ∃∃∃∃             ∃∃∃∃  ∃∃∃   ∃∃∃  ∃∃∃∃             ∃∃∃      ∃∃∃      ∃∃\n ∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃∃\n';
      console.log(aa);
      this.renderBoards();
      return console.log('BaseViewの監視対象は' + this.$el.html() + 'です');
    };

    BaseView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    return BaseView;

  })(Backbone.View);
});
