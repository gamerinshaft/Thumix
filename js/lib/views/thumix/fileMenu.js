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
      this.wHeight = parseInt(this.$window.height());
      return this.wWidth = parseInt(this.$window.width());
    };

    FileMenuView.prototype.events = {
      'click [data-js=newFile]': 'createCanvas'
    };

    FileMenuView.prototype.createCanvas = function(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log(this.wHeight + "," + this.wWidth);
      return new CanvasView({
        el: $('[data-js=canvas]')
      });
    };

    return FileMenuView;

  })(Backbone.View);
});
