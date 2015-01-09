var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/thumix/header', 'templates/thumix/field'], function($, Backbone, HeaderView, template) {
  var FieldView;
  return FieldView = (function(_super) {
    __extends(FieldView, _super);

    function FieldView() {
      return FieldView.__super__.constructor.apply(this, arguments);
    }

    FieldView.prototype.initialize = function(options) {
      this.renderBoards();
      return new HeaderView({
        el: $('[data-js=header]')
      });
    };

    FieldView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    return FieldView;

  })(Backbone.View);
});
