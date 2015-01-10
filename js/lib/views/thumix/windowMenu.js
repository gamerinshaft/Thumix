var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone'], function($, Backbone) {
  var WindowMenuView;
  return WindowMenuView = (function(_super) {
    __extends(WindowMenuView, _super);

    function WindowMenuView() {
      return WindowMenuView.__super__.constructor.apply(this, arguments);
    }

    WindowMenuView.prototype.initialize = function(options) {
      return this.tool = options.tool;
    };

    WindowMenuView.prototype.events = {
      'click [data-js=showTool]': 'showTool'
    };

    WindowMenuView.prototype.showTool = function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.tool.set({
        status: 'show'
      });
      return this.dropdownToggle();
    };

    WindowMenuView.prototype.dropdownToggle = function() {
      return this.$el.dropdown('toggle');
    };

    return WindowMenuView;

  })(Backbone.View);
});
