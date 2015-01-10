var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone'], function($, Backbone) {
  var Tool;
  return Tool = (function(_super) {
    __extends(Tool, _super);

    function Tool() {
      return Tool.__super__.constructor.apply(this, arguments);
    }

    Tool.prototype.defaults = {
      status: 'hidden'
    };

    return Tool;

  })(Backbone.Model);
});
