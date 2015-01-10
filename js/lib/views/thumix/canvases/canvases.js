var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/canvases', 'views/thumix/canvases/canvas'], function($, Backbone, template, CanvasView) {
  var CanvasesView;
  return CanvasesView = (function(_super) {
    __extends(CanvasesView, _super);

    function CanvasesView() {
      return CanvasesView.__super__.constructor.apply(this, arguments);
    }

    CanvasesView.prototype.initialize = function(options) {
      this.canvases = options.canvases;
      this.render();
      return this.listenTo(this.canvases, 'add', (function(_this) {
        return function(canvas) {
          _this.canvasView = new CanvasView({
            el: $('[data-js=canvas]'),
            canvas: canvas
          });
          console.log(canvas.get('name'));
          console.log('kitaaa');
          return _this.canvases.each(function(b) {
            return console.log(b.get('name'));
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
