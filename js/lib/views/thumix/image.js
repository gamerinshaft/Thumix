var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/image'], function($, Backbone, template) {
  var ImageView;
  return ImageView = (function(_super) {
    __extends(ImageView, _super);

    function ImageView() {
      return ImageView.__super__.constructor.apply(this, arguments);
    }

    ImageView.prototype.className = 'image';

    ImageView.prototype.tagName = 'i';

    ImageView.prototype.id = function() {
      return _.uniqueId('image');
    };

    ImageView.prototype.attributes = {
      'module': 'image'
    };

    ImageView.prototype.initialize = function(options) {
      this.image = options.image;
      return this.$el.css({
        width: this.image.get("width") + "px"
      });
    };

    ImageView.prototype.events = {
      "click [function=removeBtn]": "removeImage"
    };

    ImageView.prototype.renderDom = function() {
      this.$el.html(template({
        image: this.image
      }));
      this.$el.draggable({
        containment: $("[module=canvasField]"),
        stack: "[module=image]",
        zIndex: 10
      }).resizable({
        containment: $("[module=canvasField]"),
        minWidth: 50,
        minHeight: 50
      });
      return this;
    };

    ImageView.prototype.removeImage = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.confirm("この画像を削除しますか？")) {
        return this.remove();
      }
    };

    return ImageView;

  })(Backbone.View);
});
