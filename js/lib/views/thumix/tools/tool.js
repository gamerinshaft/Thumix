var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/thumix/tool', 'models/image'], function($, Backbone, template, Image) {
  var ToolView;
  return ToolView = (function(_super) {
    __extends(ToolView, _super);

    function ToolView() {
      this.renderImage = __bind(this.renderImage, this);
      return ToolView.__super__.constructor.apply(this, arguments);
    }

    ToolView.prototype.initialize = function(options) {
      this.renderDom();
      this.tool = options.tool;
      this.images = options.images;
      this.imageNum = 0;
      this.tool.on("change", (function(_this) {
        return function() {
          switch (_this.tool.get('status')) {
            case 'show':
              return _this.$('[data-js=toolBox]').removeClass('hide');
            case 'hidden':
              return _this.$('[data-js=toolBox]').addClass('hide');
          }
        };
      })(this));
      $("[data-js=toolBox]").draggable({
        scroll: false,
        containment: '[module=body]'
      });
      $('[data-js=acceptBox]').on('dragover', function(e) {
        e.preventDefault();
        return e.stopPropagation();
      }).on('drop', function(e) {
        e.preventDefault();
        return e.stopPropagation();
      }).on('click', (function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.$('[data-js=submitImage]').trigger("click");
        };
      })(this));
      return this.$('[data-js=submitImage]').on('change', (function(_this) {
        return function() {
          return _this.renderImage();
        };
      })(this));
    };

    ToolView.prototype.events = {
      "click [data-js=remove]": "removeToolBox"
    };

    ToolView.prototype.renderDom = function() {
      return this.$el.html(template);
    };

    ToolView.prototype.renderImage = function() {
      var fileObject, reader;
      this.image = new Image();
      fileObject = this.$('[data-js=submitImage]')[0].files[0];
      reader = new FileReader();
      if (!fileObject.type.match('image.*')) {
        return alert('画像ファイルだけアップロードできるんですよ先輩！！！');
      } else {
        reader.onload = (function(_this) {
          return function() {
            var width;
            width = parseInt($(window).width() * 0.1);
            _this.image.set({
              width: width,
              src: reader.result,
              order: _this.imageNum
            });
            _this.images.add(_this.image);
            return _this.imageNum += 1;
          };
        })(this);
        return reader.readAsDataURL(fileObject);
      }
    };

    ToolView.prototype.removeToolBox = function() {
      return this.tool.set({
        status: 'hidden'
      });
    };

    return ToolView;

  })(Backbone.View);
});
