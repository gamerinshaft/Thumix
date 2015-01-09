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
      this.renderBoards();
      new FileMenuView({
        el: $('[data-js=fileMenu]')
      });
      return new WindowMenuView({
        el: $('[data-js=windowMenu]')
      });
    };

    HeaderView.prototype.renderBoards = function() {
      return this.$el.html(template);
    };

    return HeaderView;

  })(Backbone.View);
});
