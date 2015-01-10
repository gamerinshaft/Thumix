var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/thumix/canvas'], function($, Backbone, CanvasView) {
  var FileMenuView;
  return FileMenuView = (function(_super) {
    __extends(FileMenuView, _super);

    function FileMenuView() {
      return FileMenuView.__super__.constructor.apply(this, arguments);
    }

    FileMenuView.prototype.initialize = function(options) {
      this.$modal = $(this.$el.children('li').attr('modalClass'));
      this.$window = $(window);
      this.cHeight = parseInt(this.$window.height() * 0.8);
      return this.cWidth = parseInt(this.$window.width() * 0.8);
    };

    FileMenuView.prototype.events = {
      'click [data-js=openModal]': 'openModal',
      'click [data-js=fileModal]': 'stopEvent',
      'click [data-js=submit]': 'createCanvas'
    };

    FileMenuView.prototype.openModal = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return this.$modal.modal('show');
    };

    FileMenuView.prototype.dropdownToggle = function() {
      return this.$el.dropdown('toggle');
    };

    FileMenuView.prototype.stopEvent = function(e) {
      e.preventDefault();
      return e.stopPropagation();
    };

    FileMenuView.prototype.createCanvas = function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$modal.modal('hide');
      this.$modal.one("hidden.bs.modal", (function(_this) {
        return function() {
          return _this.dropdownToggle();
        };
      })(this));
      this.$name = this.$('[data-js=canvasName]');
      this.name = this.$name.val();
      this.$name.val('新規キャンバス');
      return new CanvasView({
        el: $("[data-js=canvas]"),
        width: this.cWidth,
        height: this.cHeight,
        name: this.name
      });
    };

    return FileMenuView;

  })(Backbone.View);
});
