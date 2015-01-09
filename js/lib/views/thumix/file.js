var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone'], function($, Backbone) {
  var FileView;
  FileView = (function(_super) {
    __extends(FileView, _super);

    function FileView() {
      return FileView.__super__.constructor.apply(this, arguments);
    }

    FileView.prototype.initialize = function(opitons) {};

    return FileView;

  })(Backbone.View);
  return {
    events: {
      'click [data-js=newFile]': 'createCanvas'
    },
    createCanvas: function(e) {
      e.stopPropagation();
      e.preventDefault();
      return new CanvasView({
        el: $('[data-js=canvas]')
      });
    }
  };
});
