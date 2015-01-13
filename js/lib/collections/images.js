var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/image'], function($, Backbone, Canvas) {
  var Images;
  return Images = (function(_super) {
    __extends(Images, _super);

    function Images() {
      return Images.__super__.constructor.apply(this, arguments);
    }

    Images.prototype.model = Image;

    return Images;

  })(Backbone.Collection);
});
