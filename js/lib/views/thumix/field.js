var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/field'], function($, Backbone, template) {
  var FieldView;
  return FieldView = (function(_super) {
    __extends(FieldView, _super);

    function FieldView() {
      return FieldView.__super__.constructor.apply(this, arguments);
    }

    FieldView.prototype.initialize = function(opitons) {
      return this.renderBoards();
    };

    FieldView.prototype.events = {
      'click [data-js=destroy]': 'destroy'
    };

    FieldView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    FieldView.prototype.destroy = function() {
      return console.log('×ボタンが押されました');
    };

    return FieldView;

  })(Backbone.View);
});
