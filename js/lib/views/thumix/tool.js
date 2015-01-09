var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/tool'], function($, Backbone, template) {
  var ToolView;
  return ToolView = (function(_super) {
    __extends(ToolView, _super);

    function ToolView() {
      return ToolView.__super__.constructor.apply(this, arguments);
    }

    ToolView.prototype.initialize = function(opitons) {
      this.renderBoards();
      return $("[data-js=toolBox]").draggable();
    };

    ToolView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    return ToolView;

  })(Backbone.View);
});
