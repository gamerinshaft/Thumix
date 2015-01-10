var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/header', 'views/thumix/fileMenu', 'views/thumix/windowMenu'], function($, Backbone, template, FileMenuView, WindowMenuView) {
  var HeaderView;
  return HeaderView = (function(_super) {
    __extends(HeaderView, _super);

    function HeaderView() {
      return HeaderView.__super__.constructor.apply(this, arguments);
    }

    HeaderView.prototype.initialize = function(options) {
      var $openDropdown, isClick, isOn;
      this.renderBoards();
      new FileMenuView({
        el: $('[data-js=fileMenu]')
      });
      new WindowMenuView({
        el: $('[data-js=windowMenu]')
      });
      this.$(".modal-content").draggable({
        scroll: false,
        containment: '[module=field]'
      });
      isOn = true;
      isClick = false;
      $openDropdown = '';
      this.$(".dropdown").on("shown.bs.dropdown", function() {
        return this.$openDropdown = this;
      });
      this.$('[tabs]').on("mouseleave", function() {
        return isOn = false;
      });
      return this.$('.dropdown').on("click", function() {
        $('[data-js=body]').one("click", function() {
          isClick = false;
          return $(this.$openDropdown).dropdown('toggle');
        });
        isClick = true;
        return isOn = true;
      }).on("mouseleave", function() {
        if (!isOn) {
          return isOn = true;
        }
      }).on("mouseenter", function() {
        if (isClick && isOn) {
          return $(this).children("ul").dropdown('toggle');
        }
      });
    };

    HeaderView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    return HeaderView;

  })(Backbone.View);
});
