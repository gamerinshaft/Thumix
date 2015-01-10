var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/image'], function($, Backbone, template) {
  var ImageView;
  return ImageView = (function(_super) {
    __extends(ImageView, _super);

    function ImageView() {
      return ImageView.__super__.constructor.apply(this, arguments);
    }

    ImageView.prototype.initialize = function(options) {
      this.image = options.image;
      return this.renderDom();
    };

    ImageView.prototype.renderDom = function() {
      this.$el.append(template({
        image: this.image
      }));
      return this.$("#image" + this.image.get('order')).draggable({
        containment: this.$el,
        stack: ".image",
        zIndex: 10
      });
    };

    return ImageView;

  })(Backbone.View);
});
