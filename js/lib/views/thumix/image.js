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
      ({
        className: 'image',
        tagName: 'div'
      });
      this.image = options.image;
      return this.renderDom();
    };

    ImageView.prototype.events = {
      "click [function=removeBtn]": "removeImage",
      "mousedown [function=resizeBtn]": "resizeImage",
      "mouseup [function=resizeBtn]": "Image"
    };

    ImageView.prototype.renderDom = function() {
      this.$el.append(template({
        image: this.image
      }));
      return this.$("#image" + this.image.get('order')).css({
        height: $("#image" + this.image.get('order')).height() + "px"
      }).draggable({
        containment: this.$el,
        stack: "[module=image]",
        zIndex: 10
      }).resizable({
        containment: this.$el,
        minWidth: 50,
        minHeight: 50
      });
    };

    ImageView.prototype.removeImage = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log($(this));
      if (window.confirm($(this).attr("image-order"))) {
        return this.remove();
      }
    };

    ImageView.prototype.resizeImage = function(e) {
      console.log("おされたよ");
      return console.log(e.pageX);
    };

    ImageView.prototype.Image = function(e) {
      console.log("はなされたよ");
      return console.log(e.pageX);
    };

    return ImageView;

  })(Backbone.View);
});
