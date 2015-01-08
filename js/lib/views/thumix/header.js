var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/header', 'views/thumix/canvas'], function($, Backbone, template, CanvasView) {
  var HeaderView;
  return HeaderView = (function(_super) {
    __extends(HeaderView, _super);

    function HeaderView() {
      return HeaderView.__super__.constructor.apply(this, arguments);
    }

    HeaderView.prototype.initialize = function(opitons) {
      return this.renderBoards();
    };

    HeaderView.prototype.events = {
      'click [data-js=newFile]': 'createCanvas'
    };

    HeaderView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    HeaderView.prototype.createCanvas = function(e) {
      e.stopPropagation();
      e.preventDefault();
      return new CanvasView({
        el: $('[data-js=canvas]')
      });
    };

    return HeaderView;

  })(Backbone.View);
});
