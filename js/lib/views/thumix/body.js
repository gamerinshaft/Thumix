var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/body', 'views/thumix/tools/tool', 'views/thumix/canvases/canvases'], function($, Backbone, template, ToolView, CanvasesView) {
  var BodyView;
  return BodyView = (function(_super) {
    __extends(BodyView, _super);

    function BodyView() {
      return BodyView.__super__.constructor.apply(this, arguments);
    }

    BodyView.prototype.initialize = function(options) {
      this.renderDom();
      this.tool = options.tool;
      this.canvas = options.canvas;
      this.canvases = options.canvases;
      new ToolView({
        el: $('[data-js=tool]'),
        tool: this.tool
      });
      return new CanvasesView({
        el: $('[data-js=canvases]'),
        canvas: this.canvas,
        canvases: this.canvases
      });
    };

    BodyView.prototype.renderDom = function() {
      return this.$el.html(template);
    };

    return BodyView;

  })(Backbone.View);
});
