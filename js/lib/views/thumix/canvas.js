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
      var model;
      this.width = options.width;
      this.height = options.height;
      this.renderBoards();
      this.addProperty();
      model = new Canvas();
      console.log(model.get('name'));
      model.set({
        name: '値を変更しました'
      });
      return console.log(model.get('name'));
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

    return CanvasView;

  })(Backbone.View);
});
