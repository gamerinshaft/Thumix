var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/canvas'], function($, Backbone, Canvas) {
  var FileMenuView;
  return FileMenuView = (function(_super) {
    __extends(FileMenuView, _super);

    function FileMenuView() {
      return FileMenuView.__super__.constructor.apply(this, arguments);
    }

    FileMenuView.prototype.initialize = function(options) {
      this.canvases = options.canvases;
      return this.$modal = $(this.$el.children('li').attr('modalClass'));
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

    FileMenuView.prototype.stopEvent = function(e) {
      e.preventDefault();
      return e.stopPropagation();
    };

    FileMenuView.prototype.createCanvas = function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$name = this.$('[data-js=canvasName]');
      this.$modal.modal('hide');
      this.$modal.on("hidden.bs.modal", (function(_this) {
        return function() {
          _this.dropdownToggle();
          return _this.$name.val('新規キャンバス');
        };
      })(this));
      this.canvas = new Canvas();
      this.canvas.set({
        name: this.$name.val(),
        height: parseInt($(window).height() * 0.8),
        width: parseInt($(window).width() * 0.8)
      });
      return this.canvases.add(this.canvas);
    };

    FileMenuView.prototype.dropdownToggle = function() {
      return this.$el.dropdown('toggle');
    };

    return FileMenuView;

  })(Backbone.View);
});
