var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/tool'], function($, Backbone, template) {
  var ToolView;
  return ToolView = (function(_super) {
    __extends(ToolView, _super);

    function ToolView() {
      return ToolView.__super__.constructor.apply(this, arguments);
    }

    ToolView.prototype.initialize = function(options) {
      this.renderDom();
      this.tool = options.tool;
      this.tool.on("change", (function(_this) {
        return function() {
          switch (_this.tool.get('status')) {
            case 'show':
              return _this.$('[data-js=toolBox]').removeClass('hide');
            case 'hidden':
              return _this.$('[data-js=toolBox]').addClass('hide');
          }
        };
      })(this));
      return $("[data-js=toolBox]").draggable({
        scroll: false,
        containment: '[module=body]'
      });
    };

    ToolView.prototype.events = {
      "click [data-js=remove]": "removeToolBox"
    };

    ToolView.prototype.renderDom = function() {
      return this.$el.html(template);
    };

    ToolView.prototype.removeToolBox = function() {
      return this.tool.set({
        status: 'hidden'
      });
    };

    return ToolView;

  })(Backbone.View);
});
