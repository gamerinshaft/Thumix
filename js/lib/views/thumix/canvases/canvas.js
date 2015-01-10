var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/canvas'], function($, Backbone, template) {
  var CanvasesView;
  return CanvasesView = (function(_super) {
    __extends(CanvasesView, _super);

    function CanvasesView() {
      return CanvasesView.__super__.constructor.apply(this, arguments);
    }

    CanvasesView.prototype.initialize = function(options) {
      this.canvas = options.canvas;
      return this.render();
    };

    CanvasesView.prototype.render = function() {
      return this.$el.html(template({
        canvas: this.canvas
      }));
    };

    return CanvasesView;

  })(Backbone.View);
});
