var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone'], function($, Backbone) {
  var Canvas;
  return Canvas = (function(_super) {
    __extends(Canvas, _super);

    function Canvas() {
      return Canvas.__super__.constructor.apply(this, arguments);
    }

    Canvas.prototype.defaults = {
      name: 'デフォルト値',
      height: 0,
      width: 0
    };

    return Canvas;

  })(Backbone.Model);
});
