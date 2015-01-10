var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/canvas', 'templates/thumix/canvas'], function($, Backbone, Canvas, template) {
  var CanvasView;
  return CanvasView = (function(_super) {
    __extends(CanvasView, _super);

    function CanvasView() {
      return CanvasView.__super__.constructor.apply(this, arguments);
    }

    CanvasView.prototype.initialize = function(options) {
      this.width = options.width;
      this.height = options.height;
      this.name = options.name;
      return this.canvases = options.canvases;
    };

    CanvasView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    CanvasView.prototype.addProperty = function() {
      return $('[module="canvasField"]').css({
        width: this.width,
        height: this.height
      });
    };

    CanvasView.prototype.createCanvas = function(options) {
      var canvas;
      canvas = new Canvas({
        name: options.name,
        height: options.height,
        width: options.width
      });
      this.renderBoards();
      this.addProperty();
      this.canvases.add(canvas);
      return this.canvases.each(function(canvas) {
        return console.log(canvas.get('name'));
      });
    };

    return CanvasView;

  })(Backbone.View);
});
