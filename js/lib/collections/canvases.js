var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/canvas'], function($, Backbone, Canvas) {
  var Canvases;
  return Canvases = (function(_super) {
    __extends(Canvases, _super);

    function Canvases() {
      return Canvases.__super__.constructor.apply(this, arguments);
    }

    Canvases.prototype.model = Canvas;

    return Canvases;

  })(Backbone.Collection);
});
