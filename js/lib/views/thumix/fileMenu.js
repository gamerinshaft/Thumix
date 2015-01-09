var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/thumix/canvas'], function($, Backbone, CanvasView) {
  var FileMenuView;
  return FileMenuView = (function(_super) {
    __extends(FileMenuView, _super);

    function FileMenuView() {
      return FileMenuView.__super__.constructor.apply(this, arguments);
    }

    FileMenuView.prototype.initialize = function(opitons) {
      this.$window = $(window);
      this.cHeight = parseInt(this.$window.height() * 0.8);
      return this.cWidth = parseInt(this.$window.width() * 0.8);
    };

    FileMenuView.prototype.events = {
      'click [data-js=newFile]': 'createCanvas'
    };

    FileMenuView.prototype.createCanvas = function(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log(this.wHeight + "," + this.wWidth);
      return new CanvasView({
        el: $('[data-js=canvas]'),
        height: this.cHeight,
        width: this.cWidth
      });
    };

    return FileMenuView;

  })(Backbone.View);
});
