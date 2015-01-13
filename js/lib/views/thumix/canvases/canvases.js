var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/canvases', 'views/thumix/canvases/canvas', 'views/thumix/image'], function($, Backbone, template, CanvasView, ImageView) {
  var CanvasesView;
  return CanvasesView = (function(_super) {
    __extends(CanvasesView, _super);

    function CanvasesView() {
      return CanvasesView.__super__.constructor.apply(this, arguments);
    }

    CanvasesView.prototype.initialize = function(options) {
      this.canvases = options.canvases;
      this.images = options.images;
      this.render();
      this.listenTo(this.canvases, 'add', (function(_this) {
        return function(canvas) {
          return _this.canvasView = new CanvasView({
            el: $('[data-js=canvas]'),
            canvas: canvas
          });
        };
      })(this));
      return this.listenTo(this.images, 'add', (function(_this) {
        return function(image) {
          return new ImageView({
            image: image
          });
        };
      })(this));
    };

    CanvasesView.prototype.render = function() {
      return this.$el.html(template);
    };

    return CanvasesView;

  })(Backbone.View);
});
